;var case_name = "/cases/case_001/case_001.json";
var game = null;

// Main Game Class
function AceAttorneyGame(case_json) {
    this.case_json = case_json;
    startGame = function startGame(case_json){
        $('#dialoguebox').val(case_json.start_dialogue[0]);

        //function testify () {
        //    witness_lines = this.case_json.testimonies
        //}
    }
}

$(function() {
    $.getJSON(case_name, function(case_json) {
        $('#loading').hide();
        $('#start').show();

        game = new AceAttorneyGame(case_json);
    });

    $('#start').click(function() {
        startGame(game.case_json);
        // Run your class below


    });
});
