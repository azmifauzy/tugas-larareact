<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PustakawanController extends Controller
{
    function index()
    {
        $data = [
            "name" => "Aldi",
            "gender" => "L",
            "shift" => "malam"
        ];

        return response()->json($data);
    }
}
