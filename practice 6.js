// {
//   console.log("This is the practice no 6 program ");
//   let a = "Aadil";
// Array always starts with 0
//   console.log(a[0]);
//   console.log(a[1]);
//   console.log(a[2]);
//   console.log(a[3]);
//   console.log(a[4]);
//   console.log("\t");
//   // console.log(a[5]);
//   console.log(a.length);
//   console.log("\t");
// }

// {
//   let Name = "aadil";
//   let Fr_name = "hasher";
//   console.log("My name is", Name, "My friend name is", Fr_name);
//   // As in the upper line we can write it as follows
//   console.log(`My name is ${Name} and my friend name is ${Fr_name}`);
//   console.log('Roh"an');
//   console.log('Roh"an');
//   console.log(`the name "is"Aadil`);
// }

// {
// let a = "Aadil";
// let b = "chanda sab";
// console.log(b.toUpperCase());
// console.log(b.toLowerCase());
// console.log(`The lenght of the word is ${b.length}`);
// console.log(b.slice(2, 5)); //here place no 2 word is included and place no 5 word is not included
// console.log(b.slice(1));
// console.log("\t");
// console.log(b.replace("sab", "chanda"));
// console.log(b.concat(a, "kuch nai"));
// console.log(b.charAt(7));
// console.log(b.indexOf("ha"));
// console.log(b.startsWith("h"));
// }

{
  // practice for faulty calculator
}

// {
//   let Name = "Javascript";
//   let greetings = "Hello ";
//   console.log(`The lenght of the name is ${Name.length}`);
//   console.log(`The first letter of the word is ${Name[0]}`);
//   console.log(`The last letter of the word is ${Name[Name.length - 1]}`);

//   {
//     let fullgreetings = greetings + Name + "!";
//     console.log(fullgreetings);
// this is an oldest method
// }
// {
// console.log(`${greetings}${Name}!`);
// THis is the new method
//   }
// }
// {
//   let user_search = "JavaScripT";
//   let My_Search = "jaVaScRIpt";
//   if (user_search.toLowerCase === My_Search.toLowerCase) {
//     console.log("Both are same");
//   }
// }

// {
// let sentence = "JavaScript is not a fun just, its a reality";
// console.log(`slice from (0-10) is: ${sentence.slice(0 - 10)}`);
// console.log(`Slice from (0-11) is: ${sentence.slice(11)}`);
// console.log(`Slice(-5) is ${sentence.slice(-5)}`);

//   let middleStart = sentence.indexOf("is");
//   let middleEnd = middleStart + 2;
//   console.log("Middle word:", sentence.slice(middleStart, middleEnd));
// }

// String search and replace

// console.log(sentence.indexOf("reality"));
// console.log(sentence.replace("JavaScript", "C++"));
// {
//   const text = "JavaScript is not a fun,its a reality";
//   function countchar(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i].toLowerCase() === char.toLowerCase()) {
//         count++;
//       }
//     }
//     console.log("letter appears", count, "times in the string.");
//     return count;
//   }
//   countchar(text, "I");

// console.log("Number of i in the string are", countchar(text, "i"));
// }

// {
//   let padded_text = "   Hello,World   ";
//   console.log(padded_text);
//   console.log(`Text without white spaces:${padded_text.trim()}`);
//   console.log(
//     `Text in which space are removed from start:${padded_text.trimStart()}`
//   );
//   console.log(
//     `Text in which space are removed from end:${padded_text.trimEnd()}`
//   );

//   function User_name(username) {
//     let trimmed_us_name = username.trim();
//     console.log(`The username u gave was ${username}`);
//     console.log(`After trimming it becomes ${trimmed_us_name}`);
//     return;
//   }
//   User_name("         The founder of the MAC_HOLDING'S      ");
// }

// {
//   let fruites = "Apple,Orange,Banana,Mango,Grapes";
//   // its converted from string to an array
//   let fruites_Array = fruites.split(",");
//   // console.log(`Splitting up the Friutes ${fruites_Array}`);
//   console.log("Splitting up the friutes into an Array is:", fruites_Array);

//   // now cpnverting back the array into a string
//   let fruites_list = fruites_Array.join("|");
//   console.log("The list is:", fruites_list);

//   // practical example is
//   let cv_line = "Aadil,Chanda,19,Okara";
//   let persons_data = cv_line.split(",");
//   console.log(
//     "The first name is:",
//     persons_data[0],
//     "and the last name is:",
//     persons_data[1]
//   );
//   console.log("The age is:", persons_data[2]);
//   console.log("The city is:", persons_data[3]);
//   // console.log("The undefined is:", persons_data[4]);

//   let list_is = persons_data.join("|");
//   console.log("The list is:", list_is);
// }

{
  let char1 = "A";
  let char2 = "a";
  let code_is1 = char1.charCodeAt(0);
  let code_is2 = char2.charCodeAt(0);
  console.log("Charater code at", char1, "is", code_is1);
  console.log("Charater code at", char2, "is", code_is2);
  let char = String.fromCharCode(code_is1 + 10);
  console.log("The next letter after", char1, "is", char);
}
// {
//   let char_code_A = 65;
//   // let char = char_code_A.fromCharCode(char_code_A + 1);
//   let char = String.fromCharCode(char_code_A + 1);
//   console.log("The next letter is", char);
// }

{
  function cipher(sentence, shift) {
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
      let char_code = sentence.charCodeAt(i);
      if (char_code >= 65 && char_code <= 90) {
        result += String.fromCharCode(((char_code - 65 + shift) % 26) + 65);
      } else if (char_code >= 97 && char_code <= 122) {
        result += String.fromCharCode(((char_code - 97 + shift) % 26) + 97);
      } else {
        result += sentence[i];
      }
    }
    console.log(result);
    return result;
  }
  cipher("ZAC_HOLDING", 3);
}
