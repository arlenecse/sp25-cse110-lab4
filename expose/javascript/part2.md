1. Line 12 prints 3, which is the number of prices in the list, because it returns the value of i after iterating through the list three times.
2. Line 13 prints 150, which is the last price in the list (300) multiplied by (1 - discount) so 300 * 0.50 is 150 since it would have the value of the last iteration.
3. Line 14 prints 150 because it is the final price calculated at the last iteration with the value of discountedPrice.
4. The function will return the array [50, 100, 150], which are the rounded discounted prices calculated in the for loop for the input price and discount. Nothing gets printed because it is a return function.
5. Line 12 causes ReferenceError: i is not defined because i is only defined in the scope of the for loop and therefore cannot be accessed outside the loop.
6. Line 13 causes ReferenceError: discountedPrice is not defined because the variable discountedPrice is only defined in the scope of the for loop and therefore cannot be accessed outside the loop.
7. Line 14 prints out 150 because the variable finalPrice is defined in the same block as the print statement.
8. The function will return the array [50, 100, 150] because discounted is in the scope of the function and will return the discounted prices calculated in the for loop.
9. Line 11 causes ReferenceError: i is not defined because i is only accessible in the for loop block.
10. Line 12 prints 3 because the length is the number of elements in the input list prices.
11. The function will return the array [50, 100, 150] because you can modify a const but not reassign a const.
12. Object Notation
    A. let studentName = student.name;
    B. let gradYear = student['Grad Year'];
    C. student.greeting();
    D. let favTeacher = student['Favorite Teacher'].name;
    E. let cse110 = student.courseLoad[0];
14. Arithmetic
    A. '32'
        Integers map to their exact string representation, making it like concatenating two strings
    B. 1
        Subtraction only works with numbers so '3' turns into a number resulting in 3 - 2 = 1
    C. 3
        Null turns into a 0 for addition of numbers so 3 + 0 = 3
    D. '3null'
        Since '3' is a string, null turns into a string and is concatenated
    E. 4
        True turns into 1 for addition of numbers so it becomes 1 + 3 = 4
    F. 0
        False and null turn into numbers for addition so 0 + 0 = 0
    G. '3undefined'
        Since '3' is a string, undefined becomes a string and is concatenated
    H. NaN
        Undefined cannot be turned into a number so the result is NaN (Not a Number)
16. Comparison
    A. true
        Strings are converted to integers when different types so 2 > 1 is true
    B. false
        String are compared in lexicographical ordering, meaning that it compares each character in the string in numerical order and '2' is greater than '1' for the first character
    C. true
        Strings are converted to integers when different types, so 2 == 2 is true
    D. false
        Since they are different types, the === operator evaluates to false
    E. false
        true is represented by 1, so 1 == 2 is false
    F. true
        The Boolean type case turns any value other than empty into true so it is saying true == true which is true
18. The difference between == and === operators is that when there are different types, == converts both operands to the same type while === does not. For === to be true both operands must be of the same type and value.
19. Code Question
20. The result
21. Code Question
22. The output of the code is

