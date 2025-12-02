<?php

namespace App\Http\Controllers;

use App\Http\Resources\UsedFeatureResource;
use App\Models\UsedFeature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $usedFeatures = UsedFeature::query()
            ->with(['feature'])
            ->where('user_id', Auth::user()->id)
            ->latest()
            ->paginate();

        return Inertia::render('Dashboard', [
            'usedFeatures' => UsedFeatureResource::collection($usedFeatures),
        ]
        );
    }
}
