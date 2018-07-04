export class Question {
    public question: string;
    public answers: PIXI.Text[];

    private correctAnswer: string;

    constructor(question: string, answers: string[], correctAnswer: number, onAnswerClick: Function) {
        this.question = question;
        this.correctAnswer = answers[correctAnswer];

        this.answers = [];

        for (const answer of answers) {
            const text = new PIXI.Text(answer);
            text.interactive = true;
            text.buttonMode = true;
            text.on("click", () => {
                onAnswerClick(answer === this.correctAnswer);
            })

            this.answers.push(text);
        }
    }
}