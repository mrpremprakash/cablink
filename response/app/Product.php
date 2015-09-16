<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Product
 *
 * @author Prem
 */
namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model{
    public $table = 'products';
    public $primaryKey = 'product_id';
    public $timestamps = false;
}

?>
