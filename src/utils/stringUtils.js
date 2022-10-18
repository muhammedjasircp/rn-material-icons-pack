export const convertName = name => {
  let firstLetter = name.charAt(0);

  if (firstLetter <= '9' && firstLetter >= '0') {
    switch (firstLetter) {
      case '1':
        firstLetter = 'One';
        break;
      case '2':
        firstLetter = 'Two';
        break;
      case '3':
        firstLetter = 'Three';
        break;
      case '4':
        firstLetter = 'Four';
        break;
      case '5':
        firstLetter = 'Five';
        break;
      case '6':
        firstLetter = 'Six';
        break;
      case '7':
        firstLetter = 'Seven';
        break;
      case '8':
        firstLetter = 'Eight';
        break;
      case '9':
        firstLetter = 'Nine';
        break;

      default:
        break;
    }
  } else {
    firstLetter = firstLetter.toUpperCase();
  }
  return firstLetter + name.slice(1);
};
