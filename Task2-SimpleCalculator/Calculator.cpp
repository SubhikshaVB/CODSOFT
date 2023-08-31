#include <iostream>
using namespace std;
int main() {
    char operation;
    double num1, num2;

    while (true) {
         int terminalWidth = 120;
        std::string text = "Centered Text";
        int padding = (terminalWidth - text.length()) / 2;
        cout << "-------------------------------------------------------------------------------------------------------------------------\n";
        cout << std::string(padding, ' ') <<  "\033[31m Calculator Menu \033[0m " <<endl;
        cout << "-------------------------------------------------------------------------------------------------------------------------\n";
        cout << "\033[36m 1. Addition \033[0m" << endl;
        cout << "\033[36m 2. Subtraction \033[0m" << endl;
        cout << "\033[36m 3. Multiplication \033[0m" << endl;
        cout << "\033[36m 4. Division \033[0m" << endl;
        cout << "\033[36m 5. Quit \033[0m" << endl;
        cout << "-------------------------------------------------------------------------------------------------------------------------\n";
        cout << "Enter your choice: ";
        cin >> operation;

        if (operation == '5') {
            cout << "Exiting the calculator." << endl;
            break;
        }

        cout << " \033[1m\033[33m Enter two numbers: \033[0m ";
        
        cin >> num1 >> num2;

        switch (operation) {
            case '1':
                cout << "\033[1m\033[32m Result: \033[0m " << num1 + num2 << endl;
                break;
            case '2':
                cout << "\033[1m\033[32m Result: \033[0m " << num1 - num2 << endl;
                break;
            case '3':
                cout << "\033[1m\033[32m Result: \033[0m " << num1 * num2 << endl;
                break;
            case '4':
                if (num2 != 0) {
                    cout << "\033[1m\033[32m Result: \033[0m " << num1 / num2 << endl;
                } else {
                    cout << "\033[1m\033[31m Error: Division by zero \033[0m " << endl;
                }
                break;
            default:
                cout << "Error: Invalid choice" << endl;
        }
    }

    return 0;
}
