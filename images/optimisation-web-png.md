# Optimisation PNG pour le web

Utilisation des deux outils pngnq et optipng, dans un fichier .bat rajouter le code suivant
```
c:\tools\pngnq-s9-2.0.1-win32\pngnq-s9-2.0.1-win32.exe -vf -s1 *.png  
@FOR %%G IN (*.png) DO ( @IF EXIST "%%~nG-nq8.png" (move /Y "%%~nG-nq8.png" "%%G") )  
c:\tools\optipng-0.7.6-win32\optipng -o7 *.png
```

# Optimisation des JPG pour le web
https://hacks.mozilla.org/2014/08/using-mozjpeg-to-create-efficient-jpegs/
https://mozjpeg.codelove.de/binaries.html
http://albertogasparin.it/articles/2014/12/batch-compress-images-mozjpeg/

```
cjpeg -quality 80 foo.bmp > bar.jpg
```

multi images
```
Ne marche pas sous windows :(
find ./ -name "*.jpg" -exec "C:\Tools\mozjpeg_3.1_x86/cjpeg" -quality 80 -outfile "../optimized/{}";
```

# Online tools
https://tinyjpg.com/