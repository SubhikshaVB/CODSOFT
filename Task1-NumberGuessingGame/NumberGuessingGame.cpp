#include <iostream>
#include <ctime>
using namespace std;

int main() {
    cout << "= = = = = Guess The Number Game = = = = =" << endl;
    cout << " INSTRUCTIONS: " << endl;
    cout << "1. The Computer will generate a random number." << endl;
    cout << "2. It will then prompt the user to guess the number between 1-100." << endl;
    cout << "3. The Computer will also provide clues about the number." << endl;
    cout << "4. There are limited number of chances to WIN the game!" << endl;
    cout << "5. Come-on, Lets get into the game... Good Luck!" << endl;

    string name; 
    int diffChoice;

    
    while (true) {
        cout << "Enter your name: ";
        cin >> name;
        cout << "Hello, " << name << "! " << endl;
        cout << "Difficulty levels \n";
        cout << "1 for easy \n";
        cout << "2 for medium \n";
        cout << "3 for hard \n";
        cout << "0 for quitting the game \n" <<endl;
        cout << "Choose the difficulty level : ";
        cin >> diffChoice;

        srand(time(0));
        int randomNumber = 1 + (rand() % 100);
        int guess,i=1;

        if(diffChoice == 1) {
            cout <<"\n You have 10 choices for finding the secret number!";
            int choicesRem = 10;
            for(i=1; i<=10; i++){
                cout << "\n Enter the number : ";
                cin >> guess;

                if(guess == randomNumber){
                    choicesRem = choicesRem-1;
                    cout << "Well played " << name << ". You Won!" <<guess<<"is the secret number and you found it when " << choicesRem << "chances are left. \n" ;
                    cout << "Thanks for playing... \n" << endl;
                    break;
                }
                else{
                    cout << "No "<< name << "." << guess << " is not the secret number. Try again! \n";
                }
                if(guess > randomNumber){
                    cout << "CLUE : The secret number is smaller than the number you have chosen.Try again! \n" <<endl;
                }
                else{
                    cout << "CLUE : The secret number is larger than the number you have chosen.Try again! \n" << endl;
                }
                choicesRem--;
                cout << choicesRem << " choices left. \n" <<endl;
                if(choicesRem == 0){
                    cout << "Oops! You couldn't find the secret number. It was "<<randomNumber<<endl;
                    cout << "You Lose :/ \n\n";
                    cout << "Play again\n\n";
                }
            }
        
        }
        else if(diffChoice == 2){
            cout <<"\n You have 7 choices for finding the secret number!";
            int choicesRem = 7;
            for(i=1; i<=7; i++){
                cout << "\n Enter the number : ";
                cin >> guess;

                if(guess == randomNumber){
                    cout << "Well played " << name << ". You Won!" <<guess<<"is the secret number and you found it when " << choicesRem << "chances are left. \n" ;
                    cout << "Thanks for playing... \n" << endl;
                    break;
                }
                else{
                    cout << "No "<< name << "." << guess << " is not the secret number. Try again! \n";
                }
                if(guess > randomNumber){
                    cout << "CLUE : The secret number is smaller than the number you have chosen.Try again! \n" <<endl;
                }
                else{
                    cout << "CLUE : The secret number is larger than the number you have chosen.Try again! \n" << endl;
                }
                choicesRem--;
                cout << choicesRem << " choices left. \n" <<endl;
                if(choicesRem == 0){
                    cout << "Oops! You couldn't find the secret number. It was "<<randomNumber<<endl;
                    cout << "You Lose :/ \n\n";
                    cout << "Play again\n\n";
                }
            }
        }
        else if(diffChoice == 3){
            cout <<"\n You have 5 choices for finding the secret number!";
            int choicesRem = 5;
            for(i=1; i<=5; i++){
                cout << "\n Enter the number : ";
                cin >> guess;

                if(guess == randomNumber){
                    cout << "Well played " << name << ". You Won! " <<guess<<" is the secret number and you found it when " << choicesRem << " chances are left. \n" << endl ;
                    cout << "Thanks for playing... \n" << endl;
                    exit(0);
                    break;
                }
                else{
                    cout << "No "<< name << "." << guess << " is not the secret number. Try again! \n" << endl;
                }
                if(guess > randomNumber){
                    cout << "CLUE : The secret number is smaller than the number you have chosen.Try again! \n" <<endl;
                }
                else{
                    cout << "CLUE : The secret number is larger than the number you have chosen.Try again! \n" << endl;
                }
                choicesRem--;
                cout << choicesRem << " choices left. \n" <<endl;
                if(choicesRem == 0){
                    cout << "Oops! You couldn't find the secret number. It was "<<randomNumber<<endl;
                    cout << "You Lose :/ \n\n";
                    cout << "Play again\n\n";
                }
            }
        }
        else if(diffChoice == 0){
            exit(0);
        }
        else {
            cout << "Wrong choice :( Enter valid choice [0,1,2,3] to play the game! \n " << endl;
        }
    }
    return 0;
}
