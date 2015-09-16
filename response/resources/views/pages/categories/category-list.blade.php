@extends('layouts.master')
@section('content')
<div class="panel panel-default">
    <div class="panel-heading">Category List<span style="float:right"><a href="{{ url('/categories/new') }}">Add New</a></span></div>
    <div class="panel-body">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Category Name</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <?php $counter = 1;?>
                @foreach($categories as $category)
                <tr>
                    <th scope="row">{{ $counter++ }}</th>
                    <td>{{$category['name']}}</td>
                    <td>Active</td>
                    <td><a href="{{ url('/categories/edit/'.$counter) }}">Edit</a> / <a href="">Delete</a></td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
@stop