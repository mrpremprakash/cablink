<?php
require_once ('mysql.php');
$db = new MysqliDb ('localhost', 'root', '', 'cablink');


$action = $_GET['action'];

if(!empty($action)) {
    if(function_exists($action)) {
        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata);
        $action($db, $request);
    }
}

function delete_category($db, $request) {
    $db->where('category_id', $request->id);
    $response = array('status' => 0);
    if($db->delete('categories')) {
        $response = array('status' => 1);
    }
    echo json_encode($response);
}
function delete_item($db, $request) {
    $db->where('product_id', $request->id);
    $response = array('status' => 0);
    if($db->delete('products')) {
        $response = array('status' => 1);
    }
    echo json_encode($response);
}

function add_category($db, $request)
{
    
    if(empty($request->parent_id)) {
        $request->parent_id = 0;
    }
    $data = Array ("title" => $request->title,"parent_id" => $request->parent_id, "status" => $request->status);
    $id = $db->insert ('categories', $data);
    
    $data['category_id'] = $id;
    echo json_encode(array(
        'status' => 1,
        'data' => $data
    ));
    
}

function get_categories($db, $request) {
    $categories = $db->get ("categories");
    $response = array();
    if ($db->count > 0) {
        $response = array();
        foreach ($categories as $category) {             
            $response[$category['category_id']] = $category;
        }
    }
    echo json_encode($response);
}
function get_items($db, $request) {
    $products = $db->get ("products");
    $response = array();
    if ($db->count > 0) {
        $response = array();
        foreach ($products as $product) {             
            $response[$product['product_id']] = $product;
        }
    }
    echo json_encode($response);
    
}

function add_item($db, $request)
{
    
    if(empty($request->parent_id)) {
        $request->parent_id = 0;
    }
    $data = Array ("title" => $request->title,"category_id" => $request->parent_id, 'description' => $request->desc);
    $id = $db->insert ('products', $data);
    
    $data['product_id'] = $id;
    echo json_encode(array(
        'status' => 1,
        'data' => $data
    ));
    
}
?>