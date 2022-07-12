"""
Author: Rajit Khatri, rrkhatri@purdue.edu
Assignment: 12.1 - Pyword
Date: 04/27/2022
 
Description:
    This program gets infomation about COVID-19 Cases from a text file and graphs the results as a bar chart.
Contributors:
    Name, login@purdue.edu [repeat for each]

My contributor(s) helped me:
    [ ] understand the assignment expectations without
        telling me how they will approach it.
    [ ] understand different ways to think about a solution
        without helping me plan my solution.
    [ ] think through the meaning of a specific error or
        bug present in my code without looking at my code.
    Note that if you helped somebody else with their code, you
    have to list that person as a contributor.

Academic Integrity Statement:
    I have not used source code obtained from any unauthorized
    source, either modified or unmodified; nor have I provided
    another student access to my code.  The project I am
    submitting is my own original work.
"""

"""Import additional modules below this line (starting with unit 6)."""
from random import sample

"""Write new functions below this line (starting with unit 4)."""
def pick_game_words(all_words): #This function pick the three words needed for the game 
    rand_words = sample(all_words, 3) 
    return rand_words

def print_menu(n): #This function prints the menu to the user screen 
    user_choice = "0"
    if n == 1:
        print("Welcome to PyWord.")
    while user_choice not in ["1", "2", "3"]:
        print("\n----- Main Menu -----")
        print("1. New Game")
        print("2. See Hall of Fame")
        print("3. Quit\n")
        user_choice = input("What would you like to do? ")
        if (user_choice != "1" and user_choice != "2" and user_choice != "3"):
            print("\nInvalid choice. Please try again.")
    return user_choice

def print_fame(): #This function print the hall of fame board to the user screen 
    print("\n--- Hall of Fame ---")
    print(" ## : Score : Player")
    players = []
    scores = []
    with open('hall_of_fame.txt') as fo:
        for each_line in fo:
            players.append(each_line.rstrip().split(", ")[1])
            scores.append(each_line.rstrip().split(", ")[0])
    for ranks in range(len(scores)):
        print(f' {ranks + 1:2d} : {int(scores[ranks]):5d} : {players[ranks]}', end = "\n")

def playGame(words): #This function plays three rounds of the game and decides the outcome
    tries = 1
    position = 0
    score = 0
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    results_dict = {32:'Genius', 16:'Magnificent', 8:'Impressive', 4:'Splendid', 2:'Great', 1:'Phew'}
    correct_pos = []
    correct_guess = []
    wrong_guess = []
    pl_name = input("Enter your player name: ")
    for rounds in range(3):
        print(f"\nRound {rounds + 1}:")
        guess = "0"
        while guess.lower() != words[rounds] and tries <= 6:
            guess = input(f"{tries}? ")
            while guess.isalpha() == False or len(guess) > len(words[rounds]) or len(guess) < len(words[rounds]):
                if len(guess) > len(words[rounds]) or len(guess) < len(words[rounds]):
                    print("\nInvalid guess. Please enter exactly 5 characters.\n")
                    guess = input(f"{tries}? ")
                else:
                    print("\nInvalid guess. Please only enter letters.\n")
                    guess = input(f"{tries}? ")
            print(f'', end='   ')
            for each_letter in guess.lower():
                if each_letter in words[rounds]:
                    if each_letter == words[rounds][position]:
                        print(f'!', end="")
                        correct_pos.append(each_letter)
                    else:
                        print(f'?', end="")
                        correct_guess.append(each_letter)
                else:
                    print("X", end="")
                    wrong_guess.append(each_letter)
                position += 1
            print(f'     ', end="")
            for each_letter in alphabet:
                if each_letter in correct_pos:
                    print(f"!", end= "")
                elif each_letter in correct_guess:
                    print(f"?", end = '')
                elif each_letter in wrong_guess:
                    print(f'X',end='')
                else:
                    print(f'',end=' ')
            print()
            print(f"   {guess.lower()}     {alphabet}")
            tries += 1
            position = 0
        if guess.lower() == words[rounds]:
            curr_score = 2 ** (6 - tries + 1)
            score += curr_score
            print(f"{results_dict[curr_score]}! You earned {curr_score} points this round.")
        else:
            print("You ran out of tries.")
            print(f"The word was {words[rounds]}.")
        tries = 1
        correct_pos = []
        correct_guess = []
        wrong_guess = []
    if check_fame(score):
        print("\nWay to go", pl_name + "!")
        print(f"You earned a total of {score} points and made it into the Hall of Fame!")
        update_fame([pl_name, score])
        print_fame()
    else:
        print("\nYou earned a total of {score} points.")

def check_fame(score): #This function checks whether the user is eligible to be admitted to the hall of fame 
    scores = []
    with open('hall_of_fame.txt') as fo:
        for each_line in fo:
            scores.append(int(each_line.rstrip().split(", ")[0]))
    if scores == []:
        return True
    elif len(scores) < 10:
        return True
    elif score > min(scores):
        return True
    else:
        return False

def update_fame(Player_and_score): #This function admits the user to the hall of fame and rearrages the board 
    found = 0
    location = 0
    ties = 0
    scores = []
    players = []
    with open('hall_of_fame.txt') as fo:
        for each_line in fo:
            scores.append(int(each_line.rstrip().split(", ")[0]))
            players.append(each_line.rstrip().split(", ")[1])
    if scores != []:
        for each_score in scores:
            if each_score == Player_and_score[1]:
                ties += 1
    while found == 0:
        if scores == []:
            scores.append(Player_and_score[1])
            players.append(Player_and_score[0])
            found = 1
        elif scores[location] < Player_and_score[1]:
            scores.insert(location, Player_and_score[1])
            players.insert(location, Player_and_score[0])
            found = 1
        elif scores[location] == Player_and_score[1]:
            scores.insert(location + ties + 1, Player_and_score[1])
            players.insert(location + ties + 1, Player_and_score[0])
            found = 1
        elif location == len(scores) - 1:
            scores.append(Player_and_score[1])
            players.append(Player_and_score[0])
            found = 1
        location += 1
    while len(scores) > 10:
        min_index = scores.index(min(scores))
        del scores[min_index]
        del players[min_index]
    with open('hall_of_fame.txt', 'w') as fo:
        for stats in range(len(scores)):
            fo.write(f"{scores[stats]}, {players[stats]}\n")


def main():
    with open('words.txt') as fo: #Opens the words file 
        all_words = fo.read().split()  #Imports all the words in the word file into a list 
    words = pick_game_words(all_words) #Selects three random words from the word list 
    user_inp = print_menu(1) #Gets the user input
    while user_inp != '3': #If the user doesn't quit the game 
        if user_inp == '2':  #If the user wants to see the hall of fame board
            print_fame() #Prints the hall of fame board to the user screen
        else: #If the user wants to play the game
            playGame(words) #Plays the game 
        user_inp = print_menu(0) #Gets the user input after three rounds of a game 
    print("Goodbye.") #Prints goodbye message to the screen 


"""Do not change anything below this line."""
if __name__ == '__main__':
    main()