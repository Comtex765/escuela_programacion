<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf23310c88bd29d0ca8bcf581e4e3236f
{
    public static $files = array (
        '256cf83496e2099119b5c55307e4d30d' => __DIR__ . '/../..' . '/src/file1.php',
        'ac6c04ebade447383d9cf9b72ac2ead7' => __DIR__ . '/../..' . '/src/file2.php',
    );

    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'Text\\' => 5,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Text\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf23310c88bd29d0ca8bcf581e4e3236f::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf23310c88bd29d0ca8bcf581e4e3236f::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitf23310c88bd29d0ca8bcf581e4e3236f::$classMap;

        }, null, ClassLoader::class);
    }
}
