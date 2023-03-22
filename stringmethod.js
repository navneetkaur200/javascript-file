// length funcation
text="abcdefghijklmnop"
length = text.length;
console.log(length)

// Extracting String Parts
// There are 3 methods for extracting a part of a string:
// slice method extract part of string
text1="apple,mango,banana,kiwi"
c = text1.slice(9, 13);//The method takes 2 parameters: start position, and end position (end not included)
console.log(c)
d= text1.slice(9);//extract element form 9 position 
console.log(d)
e=text1.slice(-12,-6)//This example slices out a portion of a string from position -12 to position -6:

//replace()methods
//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
str="navi,guri,gurjeet,mani,jasan.guri"
str1=str.replace("navi","navneet")
console.log("replace navi :",str1)
//To replace case insensitive, use a regular expression with an /i flag (insensitive):
str2=str.replace(/GURJEET/i,"jyoti")
console.log(str2)
//To replace all matches, use a regular expression with a /g flag (global match):
str3=str.replace(/guri/g,'gurpreet')
console.log("replace all gurjeet:",str3)
//replaceall
text3 = "I love Cats. Cats are very easy to love. Cats are very popular."
text2= text3.replaceAll("Cats","Dogs");
console.log("replaceAll method rplace all cats with dogs:",text2)
//converting uppercase to lowercase
str2="hello"
str3=str2.toUpperCase()
console.log(str3)
strr="NAVNEET"
s=strr.toLowerCase()
console.log(s)
//concat() joins two or more strings:
string="navneet,navi,guri"
strt="nn,kk,hh"
h=string.concat("  ",strt)
console.log(h)
//trim method  removes whitespace from both sides of a string
tr="    hello"
t=tr.trim()
console.log(tr.length)
console.log(t.length)
//trim stat and end
tr1="    hello    "
tt=tr1.trimStart()
console.log(tr1.length)
console.log("trim start:",tt.length)
tr2="hello    "
ttt=tr2.trimEnd()
console.log(tr1.length)
console.log("trim end:",ttt.length)

//padding start and end

demo="6"
l=demo.padStart(9,"#")
ll=demo.padEnd(9,"#")//The padStart() method pads a string with another string:
console.log("padding start :",l)
console.log("padding end: ",ll)
//The charAt() method returns the character at a specified index (position) in a string:
ex="navi,gur,man,jot"
exm=ex.charAt(0)
console.log(exm)
tex = "HELLO WORLD"
char = tex.charCodeAt(9)//The charCodeAt() method returns the unicode of the character at a specified index in a string:
console.log(char)
//index of
st = "Please locate where 'locate' occurs!";
m=st.indexOf("locate");
mm=st.lastIndexOf("locate")
v=st.search("where")
console.log(m)
console.log(mm)
console.log(v)
//match
a="The rain in SPAIN stays mainly in the plain";
kk = a.match(/ain/g);
k1=a.match("ain")
q = a.match(/ain/gi);//case sensitive
console.log(k1)
console.log(kk)
console.log(q)
//matchall

u = "I love Cats. Cats are very easy to love. Cats are very popular."
iterator=u.matchAll("Cats")
console.log(Array.from(iterator))
g=u.matchAll(/Cats/g)
console.log(Array.from(g))
//include
b1=u.includes("very")
b2=u.includes("love,3")
console.log(b1)
console.log(b2)
//The startsWith() method returns true if a string begins with a specified value.
u = "I love Cats. Cats are very easy to love. Cats are very popular."
b3=u.startsWith("I")
console.log('startwith: ',b3)
b4=u.startsWith("love",2)
console.log(b4)
//The endsWith() method returns true if a string ends with a specified value.
u = "I love Cats. Cats are very easy to love. Cats are very popular."
b5=u.endsWith("ar.")
console.log("string end with ar.",b5)
b6=u.endsWith("love",6)
console.log("string end with postion 6:",b6)
//repeat method
x="Navneet Kaur!"
y=x.repeat(4)
console.log("Repeat navneet foue times:  ",  y)
//fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
let string1 = String.fromCharCode(72, 69, 76,90);
console.log(string1)

//The split() method divides a string into a list of substrings and returns them as an array.

const message = "JavaScript::is::fun";
result = message.split("fun");
console.log(result);

