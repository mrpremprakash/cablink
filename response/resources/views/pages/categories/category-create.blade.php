@extends('layouts.master')
@section('content')
<div class="panel panel-default">
    <div class="panel-heading">Add New Category</div>
    <div class="panel-body">
        {!! Form::open(array('url' => 'categories/new','class' => 'form-horizontal')) !!}
        
        
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">Category Name:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmail3" placeholder="Name" name='item_name'>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">Status</label>
                <div class="col-sm-10">
                    <label class="radio-inline">
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="active" checked> Active
                    </label>
                    <label class="radio-inline">
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="pending"> Pending
                    </label>

                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-7">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        {!! Form::close() !!}
    </div>
</div>
@stop