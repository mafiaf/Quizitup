import { State } from "../interface";
import { Question } from "../question";
import { gameOptions } from "../util";

export class QuestionScene {
    private question: PIXI.Text;
    private state: State;

    private questions: Question[];

    private questionIndex: number;

    constructor(state: State) {

        // store the main game state currentScene, points
        this.state = state;

        // create a placeholder for the question to be asked
        this.question = new PIXI.Text("", {
            align: "center",
            fontSize: 20
        });

        this.question.x = gameOptions.centerWidth - 280;
        this.question.y = gameOptions.centerHeight - 150;

        // bind this to the function
        this.onAnswerClick = this.onAnswerClick.bind(this);

        // store all questions in array
        this.questions = [
            new Question("What movie quote 'this is sparta'", ["Bee Movie", "300", "Infinity wars"], 1, this.onAnswerClick),
            new Question("What movie quotes 'They'll never take our freedom!'", ["Batman returns", "Braveheart", "Saw"], 1, this.onAnswerClick),
            new Question("What movie quotes 'It was Beauty killed the Beast'", ["Mulan", "Romeo & Juliet", "King Kong"], 2, this.onAnswerClick),
            new Question("What movie quotes 'They call it a Royale with cheese.'", ["Pulp Fiction", "Poltergeist", "Some like it hot"], 0, this.onAnswerClick),
            new Question("What movie quotes 'I'm gonna make him an offer he can't refuse'", ["The Godfather", "Fornite", "Iron man"], 0, this.onAnswerClick),
            new Question("What movie quotes 'Wax on, wax off'", ["12 years a slave", "Karate Kid", "Kung Fury"], 1, this.onAnswerClick),
            new Question("What movie quotes 'My precious'", ["Lord of the rings", "Argo", "Frankenstein"], 0, this.onAnswerClick),
            new Question("What movie quotes 'I mean, funny like I'm a clown? I amuse you?'", ["The help", "Star Wars", "Goodfellas"], 2, this.onAnswerClick),
            new Question("What movie quotes 'Shaken, not stirred'", ["Wonderful life", "Goldfinger", "Cool hand luke"], 1, this.onAnswerClick),
            new Question("What movie quotes 'Keep your friends close, but your enemies closer'", ["The Godfather", "The usual suspects", "Network"], 0, this.onAnswerClick),
            new Question("What movie quotes 'Say hello to my little friend'", ["The Graduate", "Dead poets society", "Scarface"], 2, this.onAnswerClick),
            new Question("What movie quotes 'To infinity and beyond!'", ["Back to the future", "Toy Story", "Goodfellas"], 1, this.onAnswerClick),
            new Question("What movie quotes 'You can't handle the truth!'", ["The Terminator", "A few good men", "Iron man"], 1, this.onAnswerClick),
            new Question("What movie quotes 'Why so serious?'", ["Taxi driver", "The dark knight", "Star wars"], 1, this.onAnswerClick),
        ];

        // get first question
        this.questionIndex = 0;
    }



    onAnswerClick(isCorrect) {

        if (isCorrect) {
            // if the answer is correct add 10 points
            this.state.points = this.state.points + 10;
        } else {
            // if the answer is wrong substract 5 points;
            this.state.points = this.state.points - 5;
        }
     
        // check if this is the last question in the array
        if (this.questions.length === this.questionIndex + 1) {
            // set the scene to the ending since all questions are answered
            this.state.currentScene = "end";    
            this.questionIndex = 0;
        } else {
            // go on to next question
            this.questionIndex = this.questionIndex + 1;
        }
    }

    
    draw(app: PIXI.Application) {
        
        let currentQuestion = this.questions[this.questionIndex]
        this.question.text = currentQuestion.question;

        app.stage.addChild(this.question);

        let minHeight = 10;
        for(let answer of currentQuestion.answers) {

            answer.x = gameOptions.centerWidth - 100;
            answer.y = gameOptions.centerHeight - minHeight;

            // add 40 more pixels so the answers wont be on top of eachother
            minHeight = minHeight + 40;

            // add answer to stage
            app.stage.addChild(answer)
        }

        
    }
}