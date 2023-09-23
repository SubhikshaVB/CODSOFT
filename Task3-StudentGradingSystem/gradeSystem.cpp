#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

struct Student {
    string name;
    string course;
    int assignment1;
    int assignment2;
    int midtermExam;
    int finalExam;
    int totalMarks;
    bool saved;

    Student(const string& n, const string& c) : name(n), course(c), saved(false) {}
};

class GradeBook {
public:
    vector<Student> students;

public:
    void addStudent(const string& name, const string& course) {
        students.push_back(Student(name, course));
    }

    void updateGrades() {
        for (auto& student : students) {
            student.totalMarks = student.assignment1 + student.assignment2 + student.midtermExam + student.finalExam;
        }
    }

    void displayGrades() {
        cout << "\033[36m Student Grades:\n \033[36m";
        cout << "-----------------------------------------------------------------------------------\n";
        cout << "\033[1m\033[33m Name\t\tCourse\tAssignment 1\tAssignment 2\tMidterm\tFinal\tTotal Marks\n \033[1m\033[33m";
        cout << "-----------------------------------------------------------------------------------\n";

        for (const auto& student : students) {
                cout << student.name << "\t\t" << student.course << "\t"
                << student.assignment1 << "\t\t" << student.assignment2 << "\t\t"
                << student.midtermExam << "\t" << student.finalExam << "\t"
                << student.totalMarks << "\n";
        }
    }

    void saveGrades() {
        for (auto& student : students) {
            student.saved = true;
        }
    }

    void clearGrades() {
        students.clear();
    }

    void calculateAverage() {
        if (students.empty()) {
            cout << "No students in the gradebook.\n";
            return;
        }

        int totalMarksSum = 0;
        for (const auto& student : students) {
            totalMarksSum += student.totalMarks;
        }

        double averageGrade = static_cast<double>(totalMarksSum) / students.size();
        cout << "\033[1m\033[36m Average Grade: " << averageGrade << "\033[1m\033[36m \n";
    }

    void showMinMaxGrades() {
        if (students.empty()) {
            cout << "No students in the gradebook.\n";
            return;
        }

        vector<int> totalMarksList;
        for (const auto& student : students) {
            totalMarksList.push_back(student.totalMarks);
        }

        int lowestGrade = *min_element(totalMarksList.begin(), totalMarksList.end());
        int highestGrade = *max_element(totalMarksList.begin(), totalMarksList.end());

        cout << "Lowest Grade: " << lowestGrade << "\n";
        cout << "Highest Grade: " << highestGrade << "\n";
    }
};

int main() {
    GradeBook gradeBook;

    while (true) {
        int choice;
        cout << " \033[1m\033[36m \n------------------------------------------------------------------------------------------------------------- \033[1m \033[34m" ;
        cout << " \033[1m\033[36m \n \t \t \t \t \t Student Grade System Menu\033[1m \033[34m \n" ;
        cout << " \033[1m\033[36m \n------------------------------------------------------------------------------------------------------------- \033[1m \033[34m \n" ;
        cout << "\t \033[1m\033[32m 1. Add Student \033[1m \033[32m \n";
        cout << "\t \033[1m\033[32m 2. Update Grades \033[1m \033[32m \n";
        cout << "\t \033[1m\033[32m 3. Display Grades \033[1m \033[32m \n";
        cout << "\t \033[1m\033[32m 4. Save Grades \033[1m \033[32m \n";
        cout << "\t \033[1m\033[32m 5. Clear Grades \033[1m \033[32m \n";
        cout << "\t \033[1m\033[32m 6. Calculate Average \033[1m \033[32m \n";
        cout << "\t \033[1m\033[32m 7. Show Lowest and Highest Grades \033[1m \033[32m \n";
        cout << "\t \033[1m\033[32m 8. Exit \033[1m \033[34m \n \n";
        cout << "Enter your choice: \n";
        cin >> choice;

        switch (choice) {
            case 1: {
                string name, course;
                cout << "\033[1m\033[35m Enter student name: \033[1m \033[35m";
                cin >> name;
                cout << "\033[1m\033[35m Enter course name: \033[1m \033[35m ";
                cin >> course;
                gradeBook.addStudent(name, course);
                break;
            }
            case 2: {
                for (auto& student : gradeBook.students) {
                    cout << "\033[1m\033[35m Enter grades for " << student.name << " in the following format: \033[1m \033[35m\n";
                    cout << "\033[1m\033[32m Assignment 1 Assignment 2 Midterm Final Exam \033[1m\033[32m \n";
                    cin >> student.assignment1 >> student.assignment2 >> student.midtermExam >> student.finalExam;
                }
                gradeBook.updateGrades();
                break;
            }
            case 3:
                gradeBook.displayGrades();
                break;
            case 4:
                gradeBook.saveGrades();
                break;
            case 5:
                gradeBook.clearGrades();
                break;
            case 6:
                gradeBook.calculateAverage();
                break;
            case 7:
                gradeBook.showMinMaxGrades();
                break;
            case 8:
                return 0;
            default:
                cout << "Invalid choice. Please try again.\n";
        }
    }

    return 0;
}
