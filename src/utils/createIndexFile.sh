file=sample.js
utilsPath=./

echo "Enter the type:"
read type

svgPath=../svgs/$type
iconPath=../icons/$type
indexFile=../icons/"$type"Icons.js

files=`find $iconPath -type f -name "*.js"`
echo "" > $indexFile

for item in $files;
do
    fileName=`basename "$item" .js`  #get file name
    echo "import {$fileName} from './$type/$fileName.js' " >>  $indexFile
done

echo "\nexport const "$type"Icons = {" >>  $indexFile
for item in $files;
do
    fileName=`basename "$item" .js`  #get file name
    echo "$fileName," >>  $indexFile
done
echo "};" >>  $indexFile
