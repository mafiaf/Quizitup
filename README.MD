# Quizitup

## Typescript project 'maak een game' - programmeren 4
Voor mijn project van Programmeren 4 heb ik een kleine quiz game gemaakt met de volgende onderdelen: Classes, Inheritance, Composition, encapsulation. Daarnaast heb ik twee extra uitdagingen gepakt: 

• De game werkt met Canvas in plaats van DOM elementen

• De game gebruikt een externe library uit de lijst in deze modulewijzer. (PIXI)

Ook zijn de volgende onderdelen zichtbaar:

• De code van het individuele project staat op GitHub.

• De game is online speelbaar.

• De game heeft een startscherm en een eindscherm.

• Er zijn geen bugs. 


### Speel Quizitup via de volgende link:
[Quizitup demo](https://stud.hosted.hr.nl/0919894/quizitup/)

## De spelregels
Probeer zoveel mogelijk vragen goed te beantwoorden. Per goed beantwoorde vraag krijg je 10 punten. Per fout beantwoorde vraag gaan er 5 punten af.


## Toelichting OOP

#### Classes
In mijn Quiz game maak ik gebruikj van OOP. Door gebruik te maken van classes kan ik objecten aanmaken die maar een keer aangemaakt hoeven te worden. Zo maak je gebruik van zo min mogelijk code om toch een goede game te hebben.


Hieronder kunt u zien dat er een class wordt aangemaakt genaamd Game. Er wordt gebruik gemaakt van PIXI JS wat een game engine is (Externe Library) die ik gebruik voor het maken van de game. In de game class wordt er de gamestate bijgehouden zoals de huidige scenes die getoond worden.

```javascript
export class Game {

  private app: PIXI.Application;

  private scenes: {};
  private score: PIXI.Text;

  private state: State = {
    currentScene: "start",
    points: 0,
  }

  constructor() {
    this.app = new PIXI.Application({
      width: gameOptions.width,
      height: gameOptions.height,
      backgroundColor: 0xcfd9df
    });

    this.scenes = {
      "start": new StartScene(this.state),
      "questions": new QuestionScene(this.state),
      "end": new EndScene(this.state)
    }

    this.score = new PIXI.Text("score: 0", { fontSize: 25})
    this.score.x = gameOptions.width - 200;
  }

```


### Encapsulation
Ik probeer ervoor te zorgen dat de code niet zomaar wordt aangepast. Dit doe ik door middel van Encapsulation. In mijn code zorg ik ervoor dat properties die private zijn ook private worden aangegeven.



#### private: 
Alleen de game class kan de state aanpassen. Dit gebeurt, omdat de state op private staat. Dus het zou alleen aangepast kunnen worden in zijn eigen class.

```javascript
  private state: State = {
    currentScene: "start",
    points: 0,
  }
```


#### public: 
De vragen zijn public, omdat ze door de question scene class worden gelezen om de vragen op de scherm te tonen. Het zou niet handig zijn om de vragen op private of protected te zetten, want dan zou ik ze moeten ophalen door middel van Get en Set.

```javascript
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
```


### Inheritance
Hieronder kunt u zien dat er een button class wordt gedefinieerd.
Deze wordt geextend door de start button class die vervolgens extra data doorgeeft aan de button class.
```javascript
export class Button {
    private button: PIXI.Sprite;
    constructor(path: string, 
        x: number, 
        y: number, 
        w: number, 
        h: number,
        onClick: Function) {
        var texture = PIXI.Texture.fromImage(path);
        this.button = new PIXI.Sprite(texture);

        this.button.buttonMode = true;
        this.button.x = x;
        this.button.y = y;
        this.button.width = w;
        this.button.height = h;
        this.button.interactive = true;

        this.button.on("pointerdown", () => {
            onClick();
        })
    }

    getForStage() {
        return this.button;
    }
}
```
Hieronder kunt u zien dat de startbutton class de button class extend.
Hierdoor heeft de startbutton alle properties en functions van de button class.


```javascript
import { Button } from "./button";

export class StartButton extends Button {
    constructor(x: number, y: number, onClick: Function) {
        super("images/button-start.png", x, y, 150, 60, onClick);
    }
}
```


## Klassen diagram
![diagram](https://image.ibb.co/gDqbEy/klassendiagram.jpg)

## Extra uitdagingen
• De game werkt met Canvas in plaats van DOM elementen

• De game gebruikt een externe library uit de lijst in deze modulewijzer. (PIXI)


## Peer review **check** **missing**
Naam Sander Dechering 0939624

- De code van het individuele project staat op GitHub. ✓
- De game is online speelbaar. ✓
- De game bevat minimaal één van de onderstaande extra uitdagingen. ✓
- De game heeft een startscherm en een eindscherm. ✓
- Er zijn geen bugs. ✓
- Het project maakt gebruik van deze OOP principes. ✓
- Classes ✓
- Encapsulation ✓
- Composition ✓
- Inheritance ✓
- De GitHub pagina bevat een ReadMe bestand. Dit bestand bevat: ✓
- Per bovengenoemd OOP principe een uitleg: waar is het toegepast, en waarom is het
op die plek toegepast. De uitleg is inclusief code voorbeelden. ✓
- Een klassendiagram van de game. ✓
- Een link naar de peer review die in week 6 is gedaan. 

Extra uitdagingen
- De game ziet er zeer verzorgd uit dankzij goed uitgewerkt UI design en artwork. 
- De game bevat een hiscore lijst. Scores worden bewaard nadat de game is afgesloten. 
- De game werkt met Canvas in plaats van DOM elementen. ✓
- De game bevat local of online multiplayer.
- De game werkt op mobiele schermen en ondersteunt touchscreen controls.
- De game maakt gebruik van device api's zoals de camera, microfoon, gyroscoop of GPS. 
- De game gebruikt een externe library uit de lijst in deze modulewijzer. ✓

Feedback:

Indicatie bij welke vraag je zit en Design kan wat beter.