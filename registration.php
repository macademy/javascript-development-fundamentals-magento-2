<?php
// New modules always extend from Magento Framework's ComponentRegistrar
use Magento\Framework\Component\ComponentRegistrar;

// All modules & themes are considered "Components"
ComponentRegistrar::register(
    ComponentRegistrar::MODULE, // This is a module...
    'Macademy_JsFun', // The name of the component is VendorName_ModuleName
    __DIR__ // __DIR__ specifies it is located in the current directory
);
