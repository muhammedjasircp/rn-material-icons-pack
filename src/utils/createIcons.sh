file=""
utilsPath=./utils
svgPath=../svgs/round
iconPath=../icons/round

numberToWords () {
    letter=`echo $1 | cut -c1-1`
    # use case control structure to find digit equivalent in words 
        case $letter in
            0) x=$(echo  "Zero") ;;
            1)  x=$(echo  "One") ;;
            2)  x=$(echo  "Two") ;;
            3)  x=$(echo  "Three") ;;
            4)  x=$(echo  "Four") ;;
            5)  x=$(echo  "Five") ;;
            6)  x=$(echo  "Six") ;;
            7)  x=$(echo  "Seven") ;;
            8)  x=$(echo  "Eight") ;;
            9)  x=$(echo "Nine") ;;
            *)  x=$(echo $letter | tr 'a-z' 'A-Z') ;;
        esac	
    myString=$1
    myString="${myString:1}"
    file="$x$myString"
}


files=`find $svgPath -type f -name "*.svg"`
for item in $files;
do
    file=`basename "$i" .svg`  #get file name
    numberToWords `basename "$item" .svg` 
    touch $iconPath/$file.js # create a js file using the name

    echo "import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const $file = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />" > $iconPath/$file.js

     sed -i '' -e 's/<path/\n<Path/' "$item"
     sed -i '' -e 's/<\/svg>//' "$item"  #remove last svg tag
     sed -n '2p' "$item" >> $iconPath/$file.js
     echo "    </Svg>
  );
};
" >> $iconPath/$file.js
done