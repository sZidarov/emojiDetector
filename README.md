# a program that extracts emojis from a text and find the threshold based on the input.

The cool threshold is obtained by multiplying all the digits found in the input.
An emoji is valid when:
•	It is surrounded by 2 characters, either "::" or "**"
•	It is at least 3 characters long (without the surrounding symbols)
•	It starts with a capital letter
•	Continues with lowercase letters only
Examples of valid emojis: ::Joy::, \*\*Banana\*\*, ::Wink::
Examples of invalid emojis: ::Joy**, ::fox:es:, \*\*Monk3ys\*\*, :Snak::Es::
All the valid emojis in the text are counted and calculated their coolness. The coolness of the emoji is determined by summing all the ASCII values of all letters in the emoji. 
Examples: ::Joy:: - 306, \*\*Banana\*\* - 577, ::Wink:: - 409
The program prints the result of the cool threshold and, after that takes all emojis out of the text, counts them and prints only the cool ones on the console.