;var case_name = "/cases/case_001/case_001.json";
var game = null;

// Main Game Class
function AceAttorneyGame(case_json) {
    //Pull testimonies and dialogue
    this.case_json = case_json;
    this.testi_count = case_json.testimonies.length;
    this.start_dialogues = case_json.start_dialogue;
    //evilist = case_json.evidence;

    //Define custom variables
    current_dialogue = 0;
    in_testimony = false;

    this.nextSpeech = function(count) {
        this.current_dialogue = count++;
        $('#dialoguebox').val(this.start_dialogues[this.current_dialogue]);
    };
    this.backSpeech = function(count) {
        if (in_testimony) {
            this.current_dialogue = count--;
        }
        $('#dialoguebox').val(this.start_dialogues[this.current_dialogue]);
    };
    this.startGame = function(case_json){
        //set up button use. Button onlcick functions go above
        $('#next_btn').onclick = this.nextSpeech(this.current_dialogue);
        $('#back_btn').onclick = this.backSpeech(this.current_dialogue);
        //$('#dialoguebox').onchange = function(){
        //$('#dialoguebox').val()
        //}
        //Whenever there is a TAKETHAT or anything of the sort, use the regexp (\WTAKE THAT!\W|\WOBJECTION!\W|\WHOLD IT!\W)
        //use this http://regexpal.com/

        //add anything necessary to evidence

        //run segue dialogue,
        $('#dialoguebox').val(this.start_dialogues[0]);

        //Lay out the testimonies

        //Create testimony loops

        //Run testimony segue dialogue + go thru testimony by itself, add mc options if the value for it is true

        //make the next button go next and back button go back thru testimony rather than just forward

        //have the contradiction be correct/not correct and test to see if all is satisfactory

        //move on to next testimony, rinse and repeat until done

    };

}

//Wait for JSON
$(function() {
    $.getJSON(case_name, function(case_json) {
        $('#loading').hide();
        $('#start').show();

        game = new AceAttorneyGame(case_json);

    });

//Start button clicked
    $('#start').click(function() {
        // Run your class below
        game.startGame(game.case_json);
    });
});

//$('#img2').style.top = $('#img1').css("top");