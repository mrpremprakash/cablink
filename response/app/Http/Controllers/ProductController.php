<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use App\Http\Controllers\Controller;

use App\Product;


class ProductController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index() {
        $categories = Product::select('product_id', 'category_id', 'title', 'description', 'original_price', 'is_available', 'star')
                    ->get()->keyBy('product_id');
                return response()->json($categories);
        //return view('pages.products.product-list');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create() {
        return view('pages.products.product-create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store() {
        $productObj = new Product();
        $productObj->category_id = Request::input('category_id');
        $productObj->title = Request::input('title');
        $productObj->description = Request::input('desc');
        $productObj->original_price = Request::input('price');
        $productObj->is_available = 1;
        $status = $productObj->save();
        return response()->json(
                    array('status' => $status, 'product_id' => $productObj->product_id)
                );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id) {
        //
    }

}
