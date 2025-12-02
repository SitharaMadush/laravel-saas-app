<?php

namespace App\Observers;

use App\Models\User;

class UserObserver
{
    public function creating(User $user)
    {
        // Set default credits to 10 when a new user is created
        $user->available_credits = 10;
    }
}
