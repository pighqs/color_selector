<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Colorz</title>
        <script src="//cdnjs.cloudflare.com/ajax/libs/Colors.js/1.2.4/colors.min.js"></script>
        <script src="assets/libs/colorcolor.min.js"></script>
        <script src="assets/libs/colors.js"></script>
        <script src="https://use.fontawesome.com/28a1fa0316.js"></script>
        <script src="assets/libs/colors.js"></script>

        <link rel="stylesheet" href="assets/style/mod_form_insert.css">
        <link rel="stylesheet" href="assets/style/base.css">
        <link rel="stylesheet" href="assets/style/layout.css">
        <link rel="stylesheet" href="assets/style/colorz.css">
        <link rel="stylesheet" href="assets/style/material_colors.css">
        
        <script src="assets/js/main.js"></script>
    </head>
    <body>
        <div id="wrap-index">
            <header>
                <h1>Randomize</h1>
            </header>
            <div class="separator40px"></div>
            <h3>random colors </h3>
            <div class="separator20px"></div>



            <p>press the space bar! 
                <br>or ...</p>
            <button class="randomize">click here </button>
            <p> you can even lock the colors you like</p>

            <div class="separator40px"></div>

            <div id="palette">


                <div class="color unlocked">
                    <p class="colorName"></p>
                    <p class="colorName"></p>
                    <div class="colorDisplay col_view">
                        <i class="fa fa-unlock fa-lg" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="color unlocked">
                    <p class="colorName"></p>
                    <p class="colorNameHex"></p>
                    <div class="colorDisplay col_view">
                        <i class="fa fa-unlock fa-lg" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="color unlocked">
                    <p class="colorName"></p>
                    <p class="colorNameHex"></p>
                    <div class="colorDisplay col_view">
                        <i class="fa fa-unlock fa-lg" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="color unlocked">
                    <p class="colorName"></p>
                    <p class="colorNameHex"></p>
                    <div class="colorDisplay col_view">
                        <i class="fa fa-unlock fa-lg" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="color unlocked">
                    <p class="colorName"></p>
                    <p class="colorNameHex"></p>
                    <div class="colorDisplay col_view">
                        <i class="fa fa-unlock fa-lg" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="separator40px"></div>

            <div id="choix_couleur">
                <h2 class="center">Entrez valeur hex ou rgb</h2>
                
                <div class="separator40px"></div>
                  <div class="panel-row">
    <div id="rgb-fields" class="field-group value-fields rgb-fields active">
      <div class="field-group">
        <label for="" class="field-label">R:</label>
        <input type="number" max="255" min="0" id="redTest" class="field-input rgb-input"/>
      </div>
      <div class="field-group">
        <label for="" class="field-label">G:</label>
        <input type="number" max="255" min="0" id="greenTest" class="field-input rgb-input"/>
      </div>
      <div class="field-group">
        <label for="" class="field-label">B:</label>
        <input type="number" max="255" min="0" id="blueTest" class="field-input rgb-input"/>
      </div>
    </div>
    <div id="hex-field" class="field-group value-fields hex-field">
      <label for="" class="field-label">Hex:</label>
      <input type="text" id="hexTest" class="field-input"/>
      <div id="rgbDisplayTest" class="col_view"></div>
    </div>
<!--    <button id="mode-toggle" class="button mode-toggle">Mode</button>-->
  </div>
                <div class="separator40px"></div>
                <div class="palette">
                </div>

                <div class="separator40px"></div>
                <h2 class="center"> Utilisez une de ces couleurs telle quelle ou en l'ajustant jusqu'à la couleur souhaitée</h2>
                <div id="starter_colorz" class="palette">
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view red500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view pink500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view purple500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view deeppurple500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view indigo500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view blue500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view lightblue500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view cyan500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view teal500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view green500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view lightgreen500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view lime500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view yellow500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view amber500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view orange500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view deeporange500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view brown500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view grey500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view warmgrey500"></div>
                    </div>
                    <div class="color">
                        <div class="col-name"></div>
                        <div class="col_view coldgrey500"></div>
                    </div>
                </div>
                <div class="separator40px"></div>

                <div class="picker">

                    <p class="rgbJaugeText">red</p>
                    <input type="text" id="redText" class="inputTextColorValue">
                    <input type="range" min="0" max="255" step="1" value="" id="red" class="canal"  onchange="redText.value = red.value">

                    <p class="rgbJaugeText">green</p>
                    <input type="text" id="greenText" class="inputTextColorValue">
                    <input type="range" min="0" max="255" step="1" value="" id="green" class="canal" onchange="greenText.value = green.value">


                    <p class="rgbJaugeText">blue</p>
                    <input type="text" id="blueText" class="inputTextColorValue">
                    <input type="range" min="0" max="255" step="1" value="" id="blue" class="canal" onchange="blueText.value = blue.value">

                    <p class="darknessJaugeText">lightness</p>
                    <input type="text" id="darknessText" class="inputTextColorValue">
                    <input type="range" min="-100" max="100" step="1" value="0" id="darkness"  onchange="darknessText.value = darkness.value">



                    <div id="display"></div>
                </div>
                <div class="separator20px"></div>

                <button class="getColor">garder cette couleur</button>



            </div>
        </div>
    </body>
</html>