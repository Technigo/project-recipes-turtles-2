// All DOM selectors stored as short variables
const recipeList = document.getElementById('recipe-list')
const fishBtn = document.getElementById('fish-button')
const chickenBtn = document.getElementById('chicken-button')
const meatBtn = document.getElementById('meat-button')
const vegetarianBtn = document.getElementById('vegetarian-button')

const DUMMY_URL = {
    "q": "fish",
    "from": 0,
    "to": 10,
    "more": true,
    "count": 7000,
    "hits": [
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_672c9e7e3fbc6240477d99152ba8f6b3",
          "label": "Burnt-Scallion Fish",
          "image": "https://www.edamam.com/web-img/a96/a967fbe797803dbe8418a668cf304b53.jpg",
          "source": "Saveur",
          "url": "http://www.saveur.com/article/Recipes/Burnt-Scallion-Fish",
          "shareAs": "http://www.edamam.com/recipe/burnt-scallion-fish-672c9e7e3fbc6240477d99152ba8f6b3/fish",
          "yield": 6.0,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Alcohol-Free",
            "Immuno-Supportive"
          ],
          "cautions": [
            
          ],
          "ingredientLines": [
            "2 bunches scallions",
            "8 tbsp. butter",
            "2 8-oz. fish filets"
          ],
          "ingredients": [
            {
              "text": "2 bunches scallions",
              "weight": 226.0,
              "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
            },
            {
              "text": "8 tbsp. butter",
              "weight": 113.6,
              "image": null
            },
            {
              "text": "2 8-oz. fish filets",
              "weight": 453.59237,
              "image": "https://www.edamam.com/food-img/717/717cb400eb49626bb7c95cd29292cef4.jpg"
            }
          ],
          "calories": 1322.2806752000001,
          "totalWeight": 793.19237,
          "totalTime": 0.0,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1322.2806752000001,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 100.28143028999999,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 61.0798833645,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 3.7238079999999996,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 26.1997660026,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 5.2706283031000005,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 16.65656,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 5.876000000000001,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 5.33396,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 96.182747896,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 471.03618500000005,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 284.5240324,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 235.34323700000004,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 169.94193990000002,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2020.8729574000004,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 5.9076372720000006,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 2.4804948210000006,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 881.9910290000001,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 890.0239999999999,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 42.48800000000001,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.3159528717000001,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.5051871931,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 18.9379222011,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 0.8760876394000001,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 256.9101688,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 256.9101688,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 7.359879446000002,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 15.76536347,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 5.69288948,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 482.12229318000004,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 577.5605624960001,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 66.11403376000001,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 154.27912352307692,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 305.39941682250003,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 5.552186666666667,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 23.504000000000005,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 192.365495792,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 157.01206166666668,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 11.855168016666667,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 23.534323700000005,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 40.46236664285715,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 42.99729696595745,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 32.82020706666667,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 22.549952918181823,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 125.99871842857145,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 98.89155555555556,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 47.2088888888889,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 26.329405975000007,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 38.860553315384614,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 118.362013756875,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 67.39135687692308,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 64.2275422,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 306.66164358333344,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 105.10242313333333,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 37.952596533333335,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 401.76857765000005,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 100.28143028999999,
              "hasRDI": true,
              "daily": 154.27912352307692,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 61.0798833645,
                  "hasRDI": true,
                  "daily": 305.39941682250003,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 3.7238079999999996,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 26.1997660026,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 5.2706283031000005,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 16.65656,
              "hasRDI": true,
              "daily": 5.552186666666667,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 10.780559999999998,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 5.876000000000001,
                  "hasRDI": true,
                  "daily": 23.504000000000005,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 5.33396,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 96.182747896,
              "hasRDI": true,
              "daily": 192.365495792,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 471.03618500000005,
              "hasRDI": true,
              "daily": 157.01206166666668,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 284.5240324,
              "hasRDI": true,
              "daily": 11.855168016666667,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 235.34323700000004,
              "hasRDI": true,
              "daily": 23.534323700000005,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 169.94193990000002,
              "hasRDI": true,
              "daily": 40.46236664285715,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2020.8729574000004,
              "hasRDI": true,
              "daily": 42.99729696595745,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 5.9076372720000006,
              "hasRDI": true,
              "daily": 32.82020706666667,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 2.4804948210000006,
              "hasRDI": true,
              "daily": 22.549952918181823,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 881.9910290000001,
              "hasRDI": true,
              "daily": 125.99871842857145,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 890.0239999999999,
              "hasRDI": true,
              "daily": 98.89155555555556,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 42.48800000000001,
              "hasRDI": true,
              "daily": 47.2088888888889,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.3159528717000001,
              "hasRDI": true,
              "daily": 26.329405975000007,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.5051871931,
              "hasRDI": true,
              "daily": 38.860553315384614,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 18.9379222011,
              "hasRDI": true,
              "daily": 118.362013756875,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 0.8760876394000001,
              "hasRDI": true,
              "daily": 67.39135687692308,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 256.9101688,
              "hasRDI": true,
              "daily": 64.2275422,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 256.9101688,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 7.359879446000002,
              "hasRDI": true,
              "daily": 306.66164358333344,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 15.76536347,
              "hasRDI": true,
              "daily": 105.10242313333333,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 5.69288948,
              "hasRDI": true,
              "daily": 37.952596533333335,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 482.12229318000004,
              "hasRDI": true,
              "daily": 401.76857765000005,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 577.5605624960001,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1297c760f06e7c47e77387cdcafae687",
          "label": "Fish Fumet recipes",
          "image": "https://www.edamam.com/web-img/eb5/eb58edb23bf93ebc4ea94abdd95c14ee",
          "source": "Martha Stewart",
          "url": "http://www.marthastewart.com/352662/fish-fumet",
          "shareAs": "http://www.edamam.com/recipe/fish-fumet-recipes-1297c760f06e7c47e77387cdcafae687/fish",
          "yield": 4.0,
          "dietLabels": [
            "High-Protein",
            "Low-Fat"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Peanut-Free",
            "Tree-Nut-Free"
          ],
          "cautions": [
            
          ],
          "ingredientLines": [
            "1 pound fish bones, preferably from halibut or turbot, cut from tail to stomach",
            "coarse salt",
            "1 shallot, thinly sliced",
            "1/2 cup white wine"
          ],
          "ingredients": [
            {
              "text": "1 pound fish bones, preferably from halibut or turbot, cut from tail to stomach",
              "weight": 453.59237,
              "image": "https://www.edamam.com/food-img/7e8/7e8bc8e9579e124e37cf406e42d10c05.jpg"
            },
            {
              "text": "coarse salt",
              "weight": 3.7818208866666674,
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "1 shallot, thinly sliced",
              "weight": 59.111111111111114,
              "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
            },
            {
              "text": "1/2 cup white wine",
              "weight": 117.6,
              "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
            }
          ],
          "calories": 551.7610567,
          "totalWeight": 633.256012186814,
          "totalTime": 80.0,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 551.7610567,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 6.091889632111112,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 1.3345386092888891,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 2.1446956182555557,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 1.3384712063333335,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 12.988266666666668,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 1.8915555555555557,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 5.781004444444445,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 85.74684164977778,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 222.26026130000002,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1465.758139254267,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 64.91518446927981,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 128.52910374409035,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2254.290123097168,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 1.7623444778831532,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 2.0134495075201473,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1127.1126598666667,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 90.71847400000001,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 4.728888888888889,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.2681428516666667,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.16553993322222224,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 29.787701280322224,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.7484195209333344,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 75.70486217777778,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 75.70486217777778,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 4.989516070000001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 21.318841390000003,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 2.7905579014444446,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 0.9432888888888888,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 513.7400417868181,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 27.588052835000003,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 9.372137895555557,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 6.672693046444445,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 4.329422222222223,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 7.566222222222223,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 171.49368329955556,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 74.08675376666667,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 61.073255802261116,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 6.491518446927981,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 30.60216755811675,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 47.96361964036527,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 9.790802654906408,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 18.30408643200134,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 161.01609426666667,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 10.079830444444447,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 5.254320987654321,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 22.34523763888889,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 12.733841017094017,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 186.1731330020139,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 211.4168862256411,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 18.926215544444446,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 207.89650291666672,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 142.1256092666667,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 18.603719342962965,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 0.786074074074074,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 6.091889632111112,
              "hasRDI": true,
              "daily": 9.372137895555557,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 1.3345386092888891,
                  "hasRDI": true,
                  "daily": 6.672693046444445,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 2.1446956182555557,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 1.3384712063333335,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 12.988266666666668,
              "hasRDI": true,
              "daily": 4.329422222222223,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 11.096711111111112,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 1.8915555555555557,
                  "hasRDI": true,
                  "daily": 7.566222222222223,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 5.781004444444445,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 85.74684164977778,
              "hasRDI": true,
              "daily": 171.49368329955556,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 222.26026130000002,
              "hasRDI": true,
              "daily": 74.08675376666667,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1465.758139254267,
              "hasRDI": true,
              "daily": 61.073255802261116,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 64.91518446927981,
              "hasRDI": true,
              "daily": 6.491518446927981,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 128.52910374409035,
              "hasRDI": true,
              "daily": 30.60216755811675,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2254.290123097168,
              "hasRDI": true,
              "daily": 47.96361964036527,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 1.7623444778831532,
              "hasRDI": true,
              "daily": 9.790802654906408,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 2.0134495075201473,
              "hasRDI": true,
              "daily": 18.30408643200134,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1127.1126598666667,
              "hasRDI": true,
              "daily": 161.01609426666667,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 90.71847400000001,
              "hasRDI": true,
              "daily": 10.079830444444447,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 4.728888888888889,
              "hasRDI": true,
              "daily": 5.254320987654321,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.2681428516666667,
              "hasRDI": true,
              "daily": 22.34523763888889,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.16553993322222224,
              "hasRDI": true,
              "daily": 12.733841017094017,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 29.787701280322224,
              "hasRDI": true,
              "daily": 186.1731330020139,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.7484195209333344,
              "hasRDI": true,
              "daily": 211.4168862256411,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 75.70486217777778,
              "hasRDI": true,
              "daily": 18.926215544444446,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 75.70486217777778,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 4.989516070000001,
              "hasRDI": true,
              "daily": 207.89650291666672,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 21.318841390000003,
              "hasRDI": true,
              "daily": 142.1256092666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 2.7905579014444446,
              "hasRDI": true,
              "daily": 18.603719342962965,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 0.9432888888888888,
              "hasRDI": true,
              "daily": 0.786074074074074,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 513.7400417868181,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_ad0e583f5f88accd3ce54037a62c84ad",
          "label": "Fish Head Curry",
          "image": "https://www.edamam.com/web-img/453/45377df0aa09dfc2b19bdaad0dda0683.jpg",
          "source": "Serious Eats",
          "url": "http://www.seriouseats.com/recipes/2011/04/fish-head-curry-recipe.html",
          "shareAs": "http://www.edamam.com/recipe/fish-head-curry-ad0e583f5f88accd3ce54037a62c84ad/fish",
          "yield": 4.0,
          "dietLabels": [
            
          ],
          "healthLabels": [
            "Peanut-Free",
            "Tree-Nut-Free",
            "Alcohol-Free"
          ],
          "cautions": [
            "Tree-Nuts",
            "Shellfish",
            "Sulfites",
            "FODMAP"
          ],
          "ingredientLines": [
            "1/2 to 2 fish heads, depending on size, about 5 pounds total",
            "2 tablespoons vegetable oil",
            "1/4 cup red or green thai curry paste",
            "3 tablespoons fish sauce or anchovy sauce",
            "1 tablespoon sugar",
            "1 can coconut milk, about 12 ounces",
            "3 medium size asian eggplants, cut int 1 inch rounds",
            "Handful of bird's eye chilies",
            "1/2 cup thai basil leaves",
            "Juice of 3 limes"
          ],
          "ingredients": [
            {
              "text": "1/2 to 2 fish heads, depending on size, about 5 pounds total",
              "weight": 200.0,
              "image": "https://www.edamam.com/food-img/717/717cb400eb49626bb7c95cd29292cef4.jpg"
            },
            {
              "text": "2 tablespoons vegetable oil",
              "weight": 28.0,
              "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
            },
            {
              "text": "1/4 cup red or green thai curry paste",
              "weight": 64.00000000108204,
              "image": null
            },
            {
              "text": "3 tablespoons fish sauce or anchovy sauce",
              "weight": 54.0,
              "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
            },
            {
              "text": "1 tablespoon sugar",
              "weight": 12.4999999997887,
              "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
              "text": "1 can coconut milk, about 12 ounces",
              "weight": 423.75000000000006,
              "image": "https://www.edamam.com/food-img/671/671f7528eadb1b01efb53243d0ef0f80.JPG"
            },
            {
              "text": "3 medium size asian eggplants, cut int 1 inch rounds",
              "weight": 1644.0,
              "image": "https://www.edamam.com/food-img/da5/da5978d61b89a363147a6d13c36e3b54.jpg"
            },
            {
              "text": "Handful of bird's eye chilies",
              "weight": 13.125,
              "image": "https://www.edamam.com/food-img/e3d/e3d161d6cfe5ef287053aed5461738ba.jpg"
            },
            {
              "text": "1/2 cup thai basil leaves",
              "weight": 12.0,
              "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
            },
            {
              "text": "Juice of 3 limes",
              "weight": 201.0,
              "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
            }
          ],
          "calories": 1896.422150240477,
          "totalWeight": 2652.375000000871,
          "totalTime": 30.0,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1896.422150240477,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 128.82823320997989,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 84.23491736232799,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.21476000000000003,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 26.99581129674846,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 9.042704916818673,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 156.5229500255765,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 58.42169465252728,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 77.3128303926044,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 12.474999999789123,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 72.89773412069614,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 105.88779927561954,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 4761.615533061478,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 415.13655117858775,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 629.7540936389671,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 6004.433626068514,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 23.851242925807906,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 6.909628177613245,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1260.7977381771416,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 113.5421739560973,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 116.04036736814913,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.9688926004812607,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.8942921636010911,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 24.309595994179848,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.3629743821626077,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 549.4861671908342,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 549.4861671908342,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 3.436489569280292,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 6.2,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 13.636231138739808,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 118.27249210761133,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 2265.402423259149,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 94.82110751202386,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 198.19728186150752,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 421.17458681164,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 52.174316675192166,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 233.68677861010912,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 145.79546824139229,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 35.29593309187318,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 198.40064721089493,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 41.513655117858775,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 149.94145086642072,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 127.75390693762796,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 132.50690514337725,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 62.81480161466586,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 180.11396259673452,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 12.615797106233034,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 128.9337415201657,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 80.74105004010507,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 68.79170489239162,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 151.93497496362406,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 181.76726016635442,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 137.37154179770855,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 143.18706538667885,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 41.333333333333336,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 90.90820759159872,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 98.5604100896761,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 128.82823320997989,
              "hasRDI": true,
              "daily": 198.19728186150752,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 84.23491736232799,
                  "hasRDI": true,
                  "daily": 421.17458681164,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.21476000000000003,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 26.99581129674846,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 9.042704916818673,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 156.5229500255765,
              "hasRDI": true,
              "daily": 52.174316675192166,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 98.10125537304923,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 58.42169465252728,
                  "hasRDI": true,
                  "daily": 233.68677861010912,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 77.3128303926044,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 12.474999999789123,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 72.89773412069614,
              "hasRDI": true,
              "daily": 145.79546824139229,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 105.88779927561954,
              "hasRDI": true,
              "daily": 35.29593309187318,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 4761.615533061478,
              "hasRDI": true,
              "daily": 198.40064721089493,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 415.13655117858775,
              "hasRDI": true,
              "daily": 41.513655117858775,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 629.7540936389671,
              "hasRDI": true,
              "daily": 149.94145086642072,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 6004.433626068514,
              "hasRDI": true,
              "daily": 127.75390693762796,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 23.851242925807906,
              "hasRDI": true,
              "daily": 132.50690514337725,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 6.909628177613245,
              "hasRDI": true,
              "daily": 62.81480161466586,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1260.7977381771416,
              "hasRDI": true,
              "daily": 180.11396259673452,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 113.5421739560973,
              "hasRDI": true,
              "daily": 12.615797106233034,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 116.04036736814913,
              "hasRDI": true,
              "daily": 128.9337415201657,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.9688926004812607,
              "hasRDI": true,
              "daily": 80.74105004010507,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.8942921636010911,
              "hasRDI": true,
              "daily": 68.79170489239162,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 24.309595994179848,
              "hasRDI": true,
              "daily": 151.93497496362406,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.3629743821626077,
              "hasRDI": true,
              "daily": 181.76726016635442,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 549.4861671908342,
              "hasRDI": true,
              "daily": 137.37154179770855,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 549.4861671908342,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 3.436489569280292,
              "hasRDI": true,
              "daily": 143.18706538667885,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 6.2,
              "hasRDI": true,
              "daily": 41.333333333333336,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 13.636231138739808,
              "hasRDI": true,
              "daily": 90.90820759159872,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 118.27249210761133,
              "hasRDI": true,
              "daily": 98.5604100896761,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 2265.402423259149,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_80f49564a588ad6ba3f2748327b127e6",
          "label": "Homemade fish fingers",
          "image": "https://www.edamam.com/web-img/798/79872b022c279ee76b9bee7421481e5f.jpg",
          "source": "BBC",
          "url": "http://www.bbc.co.uk/food/recipes/homemade_fish_fingers_85938",
          "shareAs": "http://www.edamam.com/recipe/homemade-fish-fingers-80f49564a588ad6ba3f2748327b127e6/fish",
          "yield": 4.0,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Alcohol-Free"
          ],
          "cautions": [
            
          ],
          "ingredientLines": [
            "3 tbsp plain flour",
            "1 large free-range egg, beaten",
            "50g/1¾oz golden breadcrumbs (if not available, substitute with 30g/1oz fresh white breadcrumbs mixed with 20g/½oz easy-cook polenta)",
            "500g/1lb2oz thick skinless fish fillets (salmon, cod, haddock or other white fish), cut into 4 or 8 thick pieces",
            "3 tbsp sunflower oil",
            "Salt and freshly ground black pepper"
          ],
          "ingredients": [
            {
              "text": "3 tbsp plain flour",
              "weight": 23.437499999603745,
              "image": null
            },
            {
              "text": "1 large free-range egg, beaten",
              "weight": 50.0,
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "50g/1¾oz golden breadcrumbs (if not available, substitute with 30g/1oz fresh white breadcrumbs mixed with 20g/½oz easy-cook polenta)",
              "weight": 50.0,
              "image": "https://www.edamam.com/food-img/349/349f852497885b9d9c0b195ad0d0db8f.jpg"
            },
            {
              "text": "500g/1lb2oz thick skinless fish fillets (salmon, cod, haddock or other white fish), cut into 4 or 8 thick pieces",
              "weight": 500.0,
              "image": "https://www.edamam.com/food-img/717/717cb400eb49626bb7c95cd29292cef4.jpg"
            },
            {
              "text": "3 tbsp sunflower oil",
              "weight": 40.8,
              "image": "https://www.edamam.com/food-img/be4/be4dba2bb618ecda2213ac422ae05289.jpg"
            },
            {
              "text": "Salt and freshly ground black pepper",
              "weight": 3.985424999997622,
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Salt and freshly ground black pepper",
              "weight": 1.992712499998811,
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            }
          ],
          "calories": 1199.9862083735545,
          "totalWeight": 668.4270176548313,
          "totalTime": 60.0,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1199.9862083735545,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 56.99964992749608,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 10.457566682999369,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.019,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 23.715216770374642,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 18.76838414574835,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 55.50949589344686,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 3.3869687624890004,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 3.3610346099989226,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 115.98313657870894,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 436.0,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1549.3050345635756,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 182.3705746121902,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 171.08575642646306,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 1728.7370185369784,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 6.564960590757504,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 3.209972583902441,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1059.9609857495702,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 80.53803237499967,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.0,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.7387771294995232,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.7579618824998393,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 23.18524545387003,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 0.9716112933748222,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 231.93251112489676,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 162.43251112489676,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 41.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 8.52,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 16.5,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 19.360426709999746,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 15.985582862496866,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 434.77643558776305,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 59.99931041867773,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 87.69176911922474,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 52.28783341499684,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 18.50316529781562,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 13.547875049956001,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 231.9662731574179,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 145.33333333333334,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 64.55437644014899,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 18.23705746121902,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 40.73470391106263,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 36.78163869227614,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 36.47200328198613,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 29.181568944567644,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 151.42299796422432,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 8.948670263888852,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.0,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 61.56476079162694,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 58.304760192295326,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 144.90778408668768,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 74.7393302596017,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 57.98312778122419,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 355.0,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 110.0,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 129.0695113999983,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 13.321319052080721,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 56.99964992749608,
              "hasRDI": true,
              "daily": 87.69176911922474,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 10.457566682999369,
                  "hasRDI": true,
                  "daily": 52.28783341499684,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.019,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 23.715216770374642,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 18.76838414574835,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 55.50949589344686,
              "hasRDI": true,
              "daily": 18.50316529781562,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 52.12252713095786,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 3.3869687624890004,
                  "hasRDI": true,
                  "daily": 13.547875049956001,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 3.3610346099989226,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 115.98313657870894,
              "hasRDI": true,
              "daily": 231.9662731574179,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 436.0,
              "hasRDI": true,
              "daily": 145.33333333333334,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1549.3050345635756,
              "hasRDI": true,
              "daily": 64.55437644014899,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 182.3705746121902,
              "hasRDI": true,
              "daily": 18.23705746121902,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 171.08575642646306,
              "hasRDI": true,
              "daily": 40.73470391106263,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 1728.7370185369784,
              "hasRDI": true,
              "daily": 36.78163869227614,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 6.564960590757504,
              "hasRDI": true,
              "daily": 36.47200328198613,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 3.209972583902441,
              "hasRDI": true,
              "daily": 29.181568944567644,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1059.9609857495702,
              "hasRDI": true,
              "daily": 151.42299796422432,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 80.53803237499967,
              "hasRDI": true,
              "daily": 8.948670263888852,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.7387771294995232,
              "hasRDI": true,
              "daily": 61.56476079162694,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.7579618824998393,
              "hasRDI": true,
              "daily": 58.304760192295326,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 23.18524545387003,
              "hasRDI": true,
              "daily": 144.90778408668768,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 0.9716112933748222,
              "hasRDI": true,
              "daily": 74.7393302596017,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 231.93251112489676,
              "hasRDI": true,
              "daily": 57.98312778122419,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 162.43251112489676,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 41.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 8.52,
              "hasRDI": true,
              "daily": 355.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 16.5,
              "hasRDI": true,
              "daily": 110.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 19.360426709999746,
              "hasRDI": true,
              "daily": 129.0695113999983,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 15.985582862496866,
              "hasRDI": true,
              "daily": 13.321319052080721,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 434.77643558776305,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d1e03cfc1c475f279d80ab26fdbdf778",
          "label": "Gefilte Fish",
          "image": "https://www.edamam.com/web-img/dff/dffce9a5278556e68789d3e6bff9eda9.jpg",
          "source": "Food52",
          "url": "https://food52.com/recipes/50619-gefilte-fish",
          "shareAs": "http://www.edamam.com/recipe/gefilte-fish-d1e03cfc1c475f279d80ab26fdbdf778/fish",
          "yield": 10.0,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Peanut-Free",
            "Tree-Nut-Free"
          ],
          "cautions": [
            "Sulfites",
            "FODMAP"
          ],
          "ingredientLines": [
            "32 ounces fish stock",
            "32 ounces water (substitute fish stock for water if your stock is homemade)",
            "1 large carrot, diced",
            "1 rib of celery, diced",
            "8 sprigs fresh thyme",
            "1 leek (trimmed, cleaned, and sliced into thin slivers)",
            "1 cup dry white wine",
            "4 sprigs tarragon",
            "Olive oil",
            "1/2 medium yellow onion, finely diced",
            "1/3 cup matzo meal",
            "1 cup reinforced fish stock",
            "2 pounds fish, boneless and skinless fillets (see author’s note for details)",
            "1/8 teaspoon white pepper",
            "1/8 teaspoon cayenne",
            "4 eggs, separated",
            "3 teaspoons salt",
            "2 teaspoons sugar"
          ],
          "ingredients": [
            {
              "text": "32 ounces fish stock",
              "weight": 907.18474,
              "image": "https://www.edamam.com/food-img/e07/e07d7b7a8320da9f235be9d663b7a9f4.jpg"
            },
            {
              "text": "32 ounces water (substitute fish stock for water if your stock is homemade)",
              "weight": 907.18474,
              "image": "https://www.edamam.com/food-img/e07/e07d7b7a8320da9f235be9d663b7a9f4.jpg"
            },
            {
              "text": "1 large carrot, diced",
              "weight": 72.0,
              "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
            },
            {
              "text": "1 rib of celery, diced",
              "weight": 40.0,
              "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
            },
            {
              "text": "8 sprigs fresh thyme",
              "weight": 24.0,
              "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
            },
            {
              "text": "1 leek (trimmed, cleaned, and sliced into thin slivers)",
              "weight": 89.0,
              "image": "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg"
            },
            {
              "text": "1 cup dry white wine",
              "weight": 235.2,
              "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
            },
            {
              "text": "4 sprigs tarragon",
              "weight": 7.2,
              "image": "https://www.edamam.com/food-img/22f/22f8945d157d8b759c30e6738639991b.jpg"
            },
            {
              "text": "Olive oil",
              "weight": 50.241290725333336,
              "image": null
            },
            {
              "text": "1/2 medium yellow onion, finely diced",
              "weight": 55.0,
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "1/3 cup matzo meal",
              "weight": 18.333333333333332,
              "image": "https://www.edamam.com/food-img/656/656d9f10022c99adde7b67b03b5b17b2.jpg"
            },
            {
              "text": "1 cup reinforced fish stock",
              "weight": 233.0,
              "image": "https://www.edamam.com/food-img/e07/e07d7b7a8320da9f235be9d663b7a9f4.jpg"
            },
            {
              "text": "2 pounds fish, boneless and skinless fillets (see author’s note for details)",
              "weight": 907.18474,
              "image": "https://www.edamam.com/food-img/717/717cb400eb49626bb7c95cd29292cef4.jpg"
            },
            {
              "text": "1/8 teaspoon white pepper",
              "weight": 0.3,
              "image": "https://www.edamam.com/food-img/4f0/4f0e35fe6c042996408b337fb550324a.jpg"
            },
            {
              "text": "1/8 teaspoon cayenne",
              "weight": 0.225,
              "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
            },
            {
              "text": "4 eggs, separated",
              "weight": 172.0,
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "3 teaspoons salt",
              "weight": 18.0,
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "2 teaspoons sugar",
              "weight": 8.4,
              "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            }
          ],
          "calories": 2345.651643878613,
          "totalWeight": 3738.4118555811065,
          "totalTime": 0.0,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2345.651643878613,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 100.39348826,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 22.177526530087363,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.06536,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 52.41687593744379,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 15.49035801162683,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 66.7301075,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 9.7756,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 21.10575166666667,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 8.3832,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 257.9520818733333,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1113.9060648,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 8665.793885281548,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 560.7232274059721,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 544.5746568485577,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 7057.672853162382,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 18.68893749141925,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 8.009906008189107,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 3219.016883466667,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 1076.9396395999997,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 64.54426948000001,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.3641036718,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 3.3217969410000006,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 63.14370501833334,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 3.323431819733334,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 471.2668938666667,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 471.2668938666667,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 29.991168304000002,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 31.562726940000005,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 17.616009795085333,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 107.91231837665067,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 3263.032764528378,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 117.28258219393065,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 154.4515204,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 110.88763265043681,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 22.243369166666668,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 39.1024,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 515.9041637466667,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 371.3020216,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 361.07474522006453,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 56.072322740597215,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 129.6606325829899,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 150.1632521949443,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 103.82743050788471,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 72.8173273471737,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 459.8595547809524,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 119.65995995555554,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 71.7158549777778,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 113.67530598333332,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 255.52284161538466,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 394.6481563645834,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 255.64860151794875,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 117.81672346666669,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1249.632012666667,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 210.4181796,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 117.44006530056889,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 89.92693198054222,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 100.39348826,
              "hasRDI": true,
              "daily": 154.4515204,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 22.177526530087363,
                  "hasRDI": true,
                  "daily": 110.88763265043681,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.06536,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 52.41687593744379,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 15.49035801162683,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 66.7301075,
              "hasRDI": true,
              "daily": 22.243369166666668,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 56.954507500000005,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 9.7756,
                  "hasRDI": true,
                  "daily": 39.1024,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 21.10575166666667,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 8.3832,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 257.9520818733333,
              "hasRDI": true,
              "daily": 515.9041637466667,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1113.9060648,
              "hasRDI": true,
              "daily": 371.3020216,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 8665.793885281548,
              "hasRDI": true,
              "daily": 361.07474522006453,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 560.7232274059721,
              "hasRDI": true,
              "daily": 56.072322740597215,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 544.5746568485577,
              "hasRDI": true,
              "daily": 129.6606325829899,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 7057.672853162382,
              "hasRDI": true,
              "daily": 150.1632521949443,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 18.68893749141925,
              "hasRDI": true,
              "daily": 103.82743050788471,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 8.009906008189107,
              "hasRDI": true,
              "daily": 72.8173273471737,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 3219.016883466667,
              "hasRDI": true,
              "daily": 459.8595547809524,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 1076.9396395999997,
              "hasRDI": true,
              "daily": 119.65995995555554,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 64.54426948000001,
              "hasRDI": true,
              "daily": 71.7158549777778,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.3641036718,
              "hasRDI": true,
              "daily": 113.67530598333332,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 3.3217969410000006,
              "hasRDI": true,
              "daily": 255.52284161538466,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 63.14370501833334,
              "hasRDI": true,
              "daily": 394.6481563645834,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 3.323431819733334,
              "hasRDI": true,
              "daily": 255.64860151794875,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 471.2668938666667,
              "hasRDI": true,
              "daily": 117.81672346666669,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 471.2668938666667,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 29.991168304000002,
              "hasRDI": true,
              "daily": 1249.632012666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 31.562726940000005,
              "hasRDI": true,
              "daily": 210.4181796,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 17.616009795085333,
              "hasRDI": true,
              "daily": 117.44006530056889,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 107.91231837665067,
              "hasRDI": true,
              "daily": 89.92693198054222,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 3263.032764528378,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d4287fe5a333f3d32e29a77a085a1492",
          "label": "Portuguese Fish Stew recipes",
          "image": "https://www.edamam.com/web-img/8c3/8c3fa76434ed247063fcb73cedb9688d",
          "source": "Food Republic",
          "url": "http://www.foodrepublic.com/recipes/portuguese-fish-stew/",
          "shareAs": "http://www.edamam.com/recipe/portuguese-fish-stew-recipes-d4287fe5a333f3d32e29a77a085a1492/fish",
          "yield": 6.0,
          "dietLabels": [
            
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Peanut-Free",
            "Tree-Nut-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "3 ripe plum tomatoes",
            "7 ounces Savoy cabbage, outer leaves removed",
            "2 tablespoons extra virgin olive oil",
            "7 ounces chorizo sausage (cooked or uncooked), skinned, and cut into chunks",
            "2 pounds new potatoes, peeled and cut into 1/2 inch dice",
            "1/2 cup white wine",
            "6 cups fish stock",
            "2 pounds mixed white fish fillets, skinned and cut into 1-inch pieces",
            "extra-virgin olive oil",
            "chopped cilantro"
          ],
          "ingredients": [
            {
              "text": "3 ripe plum tomatoes",
              "weight": 186.0,
              "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
            },
            {
              "text": "7 ounces Savoy cabbage, outer leaves removed",
              "weight": 198.44666187500002,
              "image": "https://www.edamam.com/food-img/29b/29bb6909e03f31b43bf7417e74e7981a.jpg"
            },
            {
              "text": "2 tablespoons extra virgin olive oil",
              "weight": 27.0,
              "image": null
            },
            {
              "text": "7 ounces chorizo sausage (cooked or uncooked), skinned, and cut into chunks",
              "weight": 198.44666187500002,
              "image": "https://www.edamam.com/food-img/c01/c0139ae7ad8a0334a23365b6284a5819.jpg"
            },
            {
              "text": "2 pounds new potatoes, peeled and cut into 1/2 inch dice",
              "weight": 907.18474,
              "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
            },
            {
              "text": "1/2 cup white wine",
              "weight": 117.6,
              "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
            },
            {
              "text": "6 cups fish stock",
              "weight": 1398.0,
              "image": "https://www.edamam.com/food-img/e07/e07d7b7a8320da9f235be9d663b7a9f4.jpg"
            },
            {
              "text": "2 pounds mixed white fish fillets, skinned and cut into 1-inch pieces",
              "weight": 907.18474,
              "image": "https://www.edamam.com/food-img/717/717cb400eb49626bb7c95cd29292cef4.jpg"
            },
            {
              "text": "extra-virgin olive oil",
              "weight": 53.582134131000004,
              "image": null
            },
            {
              "text": "chopped cilantro",
              "weight": 39.3986280375,
              "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
            }
          ],
          "calories": 3600.9422606041653,
          "totalWeight": 4032.8435659185006,
          "totalTime": 60.0,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 3600.9422606041653,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 184.86539800423253,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 48.12764369380248,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 103.32281786175331,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 21.225700835413882,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 186.02045801222627,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 29.445072383175006,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 17.944308260488754,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 286.43551706657377,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 642.2054324500001,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 5248.343500261121,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 383.239609532685,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 685.2014777522502,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 10548.699380191687,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 18.213499754709854,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 14.420495685187504,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 3307.9262920580004,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 338.07670742387506,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 277.75148853137506,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 3.049257249310125,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.6959852646082503,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 73.99781448456902,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 6.358214183075876,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 607.0633081207501,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 607.0633081207501,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 27.948652129500005,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 31.099426868125004,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 20.422901364048503,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 355.45413804311204,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 3336.6339767348168,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 180.04711303020827,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 284.4083046218962,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 240.63821846901243,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 62.00681933740876,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 117.78028953270002,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 572.8710341331475,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 214.06847748333337,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 218.68097917754673,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 38.3239609532685,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 163.14320898863102,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 224.440412344504,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 101.18610974838808,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 131.0954153198864,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 472.5608988654286,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 37.564078602652785,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 308.6127650348612,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 254.10477077584375,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 207.38348189294234,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 462.48634052855635,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 489.09339869814426,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 151.76582703018752,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1164.5271720625003,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 207.32951245416672,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 136.15267576032335,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 296.2117817025934,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 184.86539800423253,
              "hasRDI": true,
              "daily": 284.4083046218962,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 48.12764369380248,
                  "hasRDI": true,
                  "daily": 240.63821846901243,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 103.32281786175331,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 21.225700835413882,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 186.02045801222627,
              "hasRDI": true,
              "daily": 62.00681933740876,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 156.57538562905125,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 29.445072383175006,
                  "hasRDI": true,
                  "daily": 117.78028953270002,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 17.944308260488754,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 286.43551706657377,
              "hasRDI": true,
              "daily": 572.8710341331475,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 642.2054324500001,
              "hasRDI": true,
              "daily": 214.06847748333337,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 5248.343500261121,
              "hasRDI": true,
              "daily": 218.68097917754673,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 383.239609532685,
              "hasRDI": true,
              "daily": 38.3239609532685,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 685.2014777522502,
              "hasRDI": true,
              "daily": 163.14320898863102,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 10548.699380191687,
              "hasRDI": true,
              "daily": 224.440412344504,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 18.213499754709854,
              "hasRDI": true,
              "daily": 101.18610974838808,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 14.420495685187504,
              "hasRDI": true,
              "daily": 131.0954153198864,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 3307.9262920580004,
              "hasRDI": true,
              "daily": 472.5608988654286,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 338.07670742387506,
              "hasRDI": true,
              "daily": 37.564078602652785,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 277.75148853137506,
              "hasRDI": true,
              "daily": 308.6127650348612,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 3.049257249310125,
              "hasRDI": true,
              "daily": 254.10477077584375,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.6959852646082503,
              "hasRDI": true,
              "daily": 207.38348189294234,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 73.99781448456902,
              "hasRDI": true,
              "daily": 462.48634052855635,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 6.358214183075876,
              "hasRDI": true,
              "daily": 489.09339869814426,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 607.0633081207501,
              "hasRDI": true,
              "daily": 151.76582703018752,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 607.0633081207501,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 27.948652129500005,
              "hasRDI": true,
              "daily": 1164.5271720625003,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 31.099426868125004,
              "hasRDI": true,
              "daily": 207.32951245416672,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 20.422901364048503,
              "hasRDI": true,
              "daily": 136.15267576032335,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 355.45413804311204,
              "hasRDI": true,
              "daily": 296.2117817025934,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 3336.6339767348168,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_963a919663d25d530b3267836a08c554",
          "label": "Fish Pie",
          "image": "https://www.edamam.com/web-img/bae/baed2be48f33a7ad5ab8b120367c363a.jpg",
          "source": "BBC Good Food",
          "url": "http://www.bbcgoodfood.com/recipes/11329/",
          "shareAs": "http://www.edamam.com/recipe/fish-pie-963a919663d25d530b3267836a08c554/fish",
          "yield": 6.0,
          "dietLabels": [
            
          ],
          "healthLabels": [
            "Peanut-Free",
            "Tree-Nut-Free"
          ],
          "cautions": [
            "FODMAP"
          ],
          "ingredientLines": [
            "butter",
            "small handful basil leaves",
            "6 eggs , 5 boiled for 6 minutes, cooled, shelled and halved plus 1 yolk for the glaze",
            "200.0g scallops , cleaned",
            "2 tsp thyme leaves",
            "375.0ml fish or vegetable stock",
            "200.0ml double cream",
            "4 shallots , chopped",
            "500.0g puff pastry (choose one made with butter)",
            "600.0g white fish fillets",
            "VERMOUTH VELOUTÉ",
            "200.0g peas , fresh or frozen",
            "200.0ml dry vermouth , such as Noilly Prat",
            "200.0g salmon fillets",
            "small handful tarragon leaves",
            "200.0ml white wine"
          ],
          "ingredients": [
            {
              "text": "butter",
              "weight": 42.999222577822344,
              "image": null
            },
            {
              "text": "small handful basil leaves",
              "weight": 2.25,
              "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
            },
            {
              "text": "6 eggs , 5 boiled for 6 minutes, cooled, shelled and halved plus 1 yolk for the glaze",
              "weight": 258.0,
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "200.0g scallops , cleaned",
              "weight": 200.0,
              "image": "https://www.edamam.com/food-img/463/4638ecee878f16a7101c08bd214b1356.png"
            },
            {
              "text": "2 tsp thyme leaves",
              "weight": 1.6,
              "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
            },
            {
              "text": "375.0ml fish or vegetable stock",
              "weight": 359.8023353117982,
              "image": null
            },
            {
              "text": "200.0ml double cream",
              "weight": 201.53157530298427,
              "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
            },
            {
              "text": "4 shallots , chopped",
              "weight": 236.44444444444446,
              "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
            },
            {
              "text": "500.0g puff pastry (choose one made with butter)",
              "weight": 500.0,
              "image": null
            },
            {
              "text": "600.0g white fish fillets",
              "weight": 600.0,
              "image": "https://www.edamam.com/food-img/717/717cb400eb49626bb7c95cd29292cef4.jpg"
            },
            {
              "text": "VERMOUTH VELOUTÉ",
              "weight": 0.0,
              "image": null
            },
            {
              "text": "200.0g peas , fresh or frozen",
              "weight": 200.0,
              "image": "https://www.edamam.com/food-img/5ed/5ed641d646c028598a90bdb9ece34fc8.jpg"
            },
            {
              "text": "200.0ml dry vermouth , such as Noilly Prat",
              "weight": 199.50273394087367,
              "image": null
            },
            {
              "text": "200.0g salmon fillets",
              "weight": 200.0,
              "image": "https://www.edamam.com/food-img/9a0/9a0f38422e9f21dcedbc2dca0d8209ac.jpg"
            },
            {
              "text": "small handful tarragon leaves",
              "weight": 3.75,
              "image": "https://www.edamam.com/food-img/22f/22f8945d157d8b759c30e6738639991b.jpg"
            },
            {
              "text": "200.0ml white wine",
              "weight": 198.82645348683684,
              "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
            }
          ],
          "calories": 5935.0553741128415,
          "totalWeight": 3204.7067650647596,
          "totalTime": 0.0,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 5935.0553741128415,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 363.9839084179522,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 134.93157024587813,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.5175545161010164,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 158.8334085429239,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 44.328494659858585,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 321.4596430380033,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 25.955728576857695,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 43.935288042143604,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 276.99451442038173,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1786.3065867074065,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 3024.4822314375288,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 664.3152731756636,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 565.1052739982326,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 5534.201758746216,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 30.87943426353068,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 15.175790526871836,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 3565.1006907868673,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 1643.3213604950663,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 113.76295314134337,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 3.5217113231250563,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 4.000972001700439,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 68.93872987524908,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 4.456602880945773,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 1207.5343920100245,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 652.5343920100241,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 325.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 21.492275353154547,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 25.81702624233547,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 18.45756961321058,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 167.27249318132402,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 2180.0443359545807,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 296.7527687056421,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 559.9752437199264,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 674.6578512293906,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 107.1532143460011,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 103.82291430743078,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 553.9890288407635,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 595.4355289024688,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 126.0200929765637,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 66.43152731756636,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 134.54887476148397,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 117.74897359034502,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 171.55241257517045,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 137.96173206247124,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 509.30009868383814,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 182.5912622772296,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 126.4032812681593,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 293.4759435937547,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 307.7670770538799,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 430.86706172030676,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 342.81560622659794,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 301.8835980025061,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 895.5114730481062,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 172.11350828223647,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 123.05046408807054,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 139.39374431777003,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 363.9839084179522,
              "hasRDI": true,
              "daily": 559.9752437199264,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 134.93157024587813,
                  "hasRDI": true,
                  "daily": 674.6578512293906,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.5175545161010164,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 158.8334085429239,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 44.328494659858585,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 321.4596430380033,
              "hasRDI": true,
              "daily": 107.1532143460011,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 295.50391446114565,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 25.955728576857695,
                  "hasRDI": true,
                  "daily": 103.82291430743078,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 43.935288042143604,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 276.99451442038173,
              "hasRDI": true,
              "daily": 553.9890288407635,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1786.3065867074065,
              "hasRDI": true,
              "daily": 595.4355289024688,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 3024.4822314375288,
              "hasRDI": true,
              "daily": 126.0200929765637,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 664.3152731756636,
              "hasRDI": true,
              "daily": 66.43152731756636,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 565.1052739982326,
              "hasRDI": true,
              "daily": 134.54887476148397,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 5534.201758746216,
              "hasRDI": true,
              "daily": 117.74897359034502,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 30.87943426353068,
              "hasRDI": true,
              "daily": 171.55241257517045,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 15.175790526871836,
              "hasRDI": true,
              "daily": 137.96173206247124,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 3565.1006907868673,
              "hasRDI": true,
              "daily": 509.30009868383814,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 1643.3213604950663,
              "hasRDI": true,
              "daily": 182.5912622772296,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 113.76295314134337,
              "hasRDI": true,
              "daily": 126.4032812681593,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 3.5217113231250563,
              "hasRDI": true,
              "daily": 293.4759435937547,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 4.000972001700439,
              "hasRDI": true,
              "daily": 307.7670770538799,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 68.93872987524908,
              "hasRDI": true,
              "daily": 430.86706172030676,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 4.456602880945773,
              "hasRDI": true,
              "daily": 342.81560622659794,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 1207.5343920100245,
              "hasRDI": true,
              "daily": 301.8835980025061,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 652.5343920100241,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 325.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 21.492275353154547,
              "hasRDI": true,
              "daily": 895.5114730481062,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 25.81702624233547,
              "hasRDI": true,
              "daily": 172.11350828223647,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 18.45756961321058,
              "hasRDI": true,
              "daily": 123.05046408807054,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 167.27249318132402,
              "hasRDI": true,
              "daily": 139.39374431777003,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 2180.0443359545807,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_9899a97323159ebb63ccfab80f5ad46c",
          "label": "Breaded Sicilian Fish",
          "image": "https://www.edamam.com/web-img/45d/45de2b6de121abebac834f030f5516bc.jpg",
          "source": "In Jennie's Kitchen",
          "url": "http://www.injennieskitchen.com/2009/08/bread-glorious-bread.html",
          "shareAs": "http://www.edamam.com/recipe/breaded-sicilian-fish-9899a97323159ebb63ccfab80f5ad46c/fish",
          "yield": 4.0,
          "dietLabels": [
            
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Alcohol-Free",
            "Immuno-Supportive"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1 cup breadcrumbs, unseasoned",
            "1 tsp Italian Seasoning",
            "1/4 cup Italian flat leaf parsley, fresh chopped",
            "1 tsp garlic salt",
            "Salt and pepper, to taste",
            "Olive Oil",
            "4 x boneless fillets, fresh fish (I like to use swordfish, petrale sole, rock fish or tuna but this does not work on salmon or other thick cut fish)",
            "4-6 x lemon wedges (optional)"
          ],
          "ingredients": [
            {
              "text": "1 cup breadcrumbs, unseasoned",
              "weight": 108.0,
              "image": "https://www.edamam.com/food-img/349/349f852497885b9d9c0b195ad0d0db8f.jpg"
            },
            {
              "text": "1 tsp Italian Seasoning",
              "weight": 1.0,
              "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
            },
            {
              "text": "1/4 cup Italian flat leaf parsley, fresh chopped",
              "weight": 15.0,
              "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            },
            {
              "text": "1 tsp garlic salt",
              "weight": 3.1,
              "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
            },
            {
              "text": "Salt and pepper, to taste",
              "weight": 3.7566,
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Salt and pepper, to taste",
              "weight": 1.8783,
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "Olive Oil",
              "weight": 8.51496,
              "image": null
            },
            {
              "text": "4 x boneless fillets, fresh fish (I like to use swordfish, petrale sole, rock fish or tuna but this does not work on salmon or other thick cut fish)",
              "weight": 464.0,
              "image": "https://www.edamam.com/food-img/717/717cb400eb49626bb7c95cd29292cef4.jpg"
            },
            {
              "text": "4-6 x lemon wedges (optional)",
              "weight": 35.0,
              "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
            }
          ],
          "calories": 980.5977793999999,
          "totalWeight": 637.6188505543753,
          "totalTime": 0.0,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 980.5977793999999,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 22.50862258,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 5.2840006128,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.0,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 9.6984056026,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 4.8910626748,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 86.04510285000002,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 7.459209900000001,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 7.802951120000001,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 109.21900536999999,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 231.99999999999997,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1480.1523462648,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 303.8651603330501,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 189.83014890554375,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 1814.62080384435,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 10.59973115482944,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 3.456667360554375,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 999.111714,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 65.907141,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 39.0372,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.2821435639999998,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.76100194,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 25.602134969,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 0.986099853,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 319.646311,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 169.526311,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 88.56,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 7.7092,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 14.383999999999999,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 3.4444010800000004,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 284.98218302000004,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 414.1356373611087,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 49.029888969999995,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 34.62865012307692,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 26.420003064000003,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 28.681700950000007,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 29.836839600000005,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 218.43801073999998,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 77.33333333333331,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 61.6730144277,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 30.386516033305007,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 45.19765450131994,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 38.60895327328404,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 58.887395304608,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 31.424248732312503,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 142.73024485714288,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 7.323015666666666,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 43.37466666666666,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 106.84529699999999,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 58.53861076923077,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 160.01334355625002,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 75.85383484615384,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 79.91157775,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 321.21666666666664,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 95.89333333333333,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 22.96267386666667,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 237.48515251666672,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 22.50862258,
              "hasRDI": true,
              "daily": 34.62865012307692,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 5.2840006128,
                  "hasRDI": true,
                  "daily": 26.420003064000003,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 9.6984056026,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 4.8910626748,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 86.04510285000002,
              "hasRDI": true,
              "daily": 28.681700950000007,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 78.58589295000002,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 7.459209900000001,
                  "hasRDI": true,
                  "daily": 29.836839600000005,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 7.802951120000001,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 109.21900536999999,
              "hasRDI": true,
              "daily": 218.43801073999998,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 231.99999999999997,
              "hasRDI": true,
              "daily": 77.33333333333331,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1480.1523462648,
              "hasRDI": true,
              "daily": 61.6730144277,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 303.8651603330501,
              "hasRDI": true,
              "daily": 30.386516033305007,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 189.83014890554375,
              "hasRDI": true,
              "daily": 45.19765450131994,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 1814.62080384435,
              "hasRDI": true,
              "daily": 38.60895327328404,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 10.59973115482944,
              "hasRDI": true,
              "daily": 58.887395304608,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 3.456667360554375,
              "hasRDI": true,
              "daily": 31.424248732312503,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 999.111714,
              "hasRDI": true,
              "daily": 142.73024485714288,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 65.907141,
              "hasRDI": true,
              "daily": 7.323015666666666,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 39.0372,
              "hasRDI": true,
              "daily": 43.37466666666666,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.2821435639999998,
              "hasRDI": true,
              "daily": 106.84529699999999,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.76100194,
              "hasRDI": true,
              "daily": 58.53861076923077,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 25.602134969,
              "hasRDI": true,
              "daily": 160.01334355625002,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 0.986099853,
              "hasRDI": true,
              "daily": 75.85383484615384,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 319.646311,
              "hasRDI": true,
              "daily": 79.91157775,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 169.526311,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 88.56,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 7.7092,
              "hasRDI": true,
              "daily": 321.21666666666664,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 14.383999999999999,
              "hasRDI": true,
              "daily": 95.89333333333333,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 3.4444010800000004,
              "hasRDI": true,
              "daily": 22.96267386666667,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 284.98218302000004,
              "hasRDI": true,
              "daily": 237.48515251666672,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 414.1356373611087,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1eaf58bbc25d7e627aa57ea14e038055",
          "label": "Fish soup",
          "image": "https://www.edamam.com/web-img/ab1/ab11873e5da76b62c489b0c76eac920d.jpg",
          "source": "Jamie Oliver",
          "url": "http://www.jamieoliver.com/recipes/fish-recipes/fish-soup/",
          "shareAs": "http://www.edamam.com/recipe/fish-soup-1eaf58bbc25d7e627aa57ea14e038055/fish",
          "yield": 6.0,
          "dietLabels": [
            
          ],
          "healthLabels": [
            "Peanut-Free",
            "Tree-Nut-Free"
          ],
          "cautions": [
            "FODMAP"
          ],
          "ingredientLines": [
            "1 small bulb of fennel",
            "1 leek",
            "3 sticks of celery",
            "1 fresh red chilli",
            "4 cloves of garlic",
            "3-4 tomatoes",
            "1 bunch of fresh thyme",
            "440 g white fish, from sustainable sources",
            "olive oil",
            "1 small glass of white wine",
            "400 g prawns, mussels or clams, from sustainable sources",
            "extra virgin olive oil"
          ],
          "ingredients": [
            {
              "text": "1 small bulb of fennel",
              "weight": 175.5,
              "image": "https://www.edamam.com/food-img/038/038c19f86af781e925c97991e17b90ed.jpeg"
            },
            {
              "text": "1 leek",
              "weight": 89.0,
              "image": "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg"
            },
            {
              "text": "3 sticks of celery",
              "weight": 120.0,
              "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
            },
            {
              "text": "1 fresh red chilli",
              "weight": 45.0,
              "image": "https://www.edamam.com/food-img/469/469213672957a242638e20c27e3e8acd.jpeg"
            },
            {
              "text": "4 cloves of garlic",
              "weight": 12.0,
              "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
              "text": "3-4 tomatoes",
              "weight": 430.5,
              "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
            },
            {
              "text": "1 bunch of fresh thyme",
              "weight": 15.0,
              "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
            },
            {
              "text": "440 g white fish, from sustainable sources",
              "weight": 440.0,
              "image": "https://www.edamam.com/food-img/717/717cb400eb49626bb7c95cd29292cef4.jpg"
            },
            {
              "text": "olive oil",
              "weight": 25.88624,
              "image": null
            },
            {
              "text": "1 small glass of white wine",
              "weight": 176.39999999999998,
              "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
            },
            {
              "text": "400 g prawns, mussels or clams, from sustainable sources",
              "weight": 400.0,
              "image": "https://www.edamam.com/food-img/ebe/ebe2888b894f48d19762e1d606db0206.jpg"
            },
            {
              "text": "extra virgin olive oil",
              "weight": 25.88624,
              "image": null
            }
          ],
          "calories": 1565.1317232,
          "totalWeight": 1955.17248,
          "totalTime": 30.0,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1565.1317232,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 65.48548,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 11.2308640384,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.072,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 41.00794413279999,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 9.338898070399999,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 65.54104999999998,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 17.155500000000004,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 27.49674,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 153.48178000000001,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 724.0,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2736.6804496,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 594.7187248,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 377.1,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 4409.9867248,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 11.907705887999999,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 7.4170300000000005,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2060.382,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 638.62,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 186.86249999999998,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.588255,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.719265,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 29.813482,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.596155,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 412.944,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 412.944,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 11.392000000000001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 14.040000000000003,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 19.274850880000002,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 266.95013296,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1638.8312899999996,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 78.25658616,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 100.7468923076923,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 56.154320192,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 21.84701666666666,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 68.62200000000001,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 306.96356000000003,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 241.33333333333334,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 114.02835206666666,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 59.47187248000001,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 89.78571428571429,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 93.82950478297873,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 66.15392159999999,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 67.42754545454547,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 294.34028571428576,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 70.95777777777778,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 207.625,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 49.02125,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 55.32807692307693,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 186.3342625,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 199.70423076923075,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 103.236,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 474.6666666666667,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 93.60000000000001,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 128.4990058666667,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 222.45844413333333,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 65.48548,
              "hasRDI": true,
              "daily": 100.7468923076923,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 11.2308640384,
                  "hasRDI": true,
                  "daily": 56.154320192,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.072,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 41.00794413279999,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 9.338898070399999,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 65.54104999999998,
              "hasRDI": true,
              "daily": 21.84701666666666,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 48.38554999999998,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 17.155500000000004,
                  "hasRDI": true,
                  "daily": 68.62200000000001,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 27.49674,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 153.48178000000001,
              "hasRDI": true,
              "daily": 306.96356000000003,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 724.0,
              "hasRDI": true,
              "daily": 241.33333333333334,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 2736.6804496,
              "hasRDI": true,
              "daily": 114.02835206666666,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 594.7187248,
              "hasRDI": true,
              "daily": 59.47187248000001,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 377.1,
              "hasRDI": true,
              "daily": 89.78571428571429,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 4409.9867248,
              "hasRDI": true,
              "daily": 93.82950478297873,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 11.907705887999999,
              "hasRDI": true,
              "daily": 66.15392159999999,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 7.4170300000000005,
              "hasRDI": true,
              "daily": 67.42754545454547,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2060.382,
              "hasRDI": true,
              "daily": 294.34028571428576,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 638.62,
              "hasRDI": true,
              "daily": 70.95777777777778,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 186.86249999999998,
              "hasRDI": true,
              "daily": 207.625,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.588255,
              "hasRDI": true,
              "daily": 49.02125,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.719265,
              "hasRDI": true,
              "daily": 55.32807692307693,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 29.813482,
              "hasRDI": true,
              "daily": 186.3342625,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.596155,
              "hasRDI": true,
              "daily": 199.70423076923075,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 412.944,
              "hasRDI": true,
              "daily": 103.236,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 412.944,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 11.392000000000001,
              "hasRDI": true,
              "daily": 474.6666666666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 14.040000000000003,
              "hasRDI": true,
              "daily": 93.60000000000001,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 19.274850880000002,
              "hasRDI": true,
              "daily": 128.4990058666667,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 266.95013296,
              "hasRDI": true,
              "daily": 222.45844413333333,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1638.8312899999996,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_06da4c0d8b1cabca809b4a9a6ad1e5ef",
          "label": "Baked Gefilte Fish",
          "image": "https://www.edamam.com/web-img/30b/30bc8ba581e8df430cff2a22c5e32abf.jpg",
          "source": "Epicurious",
          "url": "https://www.epicurious.com/recipes/food/views/baked-gefilte-fish-51154400",
          "shareAs": "http://www.edamam.com/recipe/baked-gefilte-fish-06da4c0d8b1cabca809b4a9a6ad1e5ef/fish",
          "yield": 6.0,
          "dietLabels": [
            
          ],
          "healthLabels": [
            "Peanut-Free",
            "Tree-Nut-Free",
            "Alcohol-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1 1/2 pounds rockfish fillet",
            "1/2 pound pike fillet",
            "1/2 pound flounder fillet",
            "8 cups fish stock, preferably homemade",
            "3/4 cup matzo meal",
            "4 large eggs, lightly beaten",
            "2 tablespoons sugar",
            "1 tablespoon chopped fresh thyme leaves",
            "2 tablespoons chopped fresh parsley",
            "1 teaspoon freshly grated lemon zest",
            "2 1/2 teaspoons salt",
            "1/8 teaspoon freshly ground black pepper",
            "Boiled Carrots with Prepared Horseradish for serving",
            "Vegetable stock or water can be used instead of fish stock."
          ],
          "ingredients": [
            {
              "text": "1 1/2 pounds rockfish fillet",
              "weight": 680.388555,
              "image": "https://www.edamam.com/food-img/28c/28c25f526318336b06586c40fa82b618.jpg"
            },
            {
              "text": "1/2 pound pike fillet",
              "weight": 226.796185,
              "image": "https://www.edamam.com/food-img/d37/d37ff6013651a187e9d095346c347d56.jpg"
            },
            {
              "text": "1/2 pound flounder fillet",
              "weight": 226.796185,
              "image": "https://www.edamam.com/food-img/90a/90a1ec5eb03e114e7cbef1d05df3f8af.jpg"
            },
            {
              "text": "8 cups fish stock, preferably homemade",
              "weight": 1864.0,
              "image": "https://www.edamam.com/food-img/e07/e07d7b7a8320da9f235be9d663b7a9f4.jpg"
            },
            {
              "text": "3/4 cup matzo meal",
              "weight": 41.25,
              "image": "https://www.edamam.com/food-img/656/656d9f10022c99adde7b67b03b5b17b2.jpg"
            },
            {
              "text": "4 large eggs, lightly beaten",
              "weight": 200.0,
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "2 tablespoons sugar",
              "weight": 24.9999999995774,
              "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
              "text": "1 tablespoon chopped fresh thyme leaves",
              "weight": 2.3999999998376933,
              "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
            },
            {
              "text": "2 tablespoons chopped fresh parsley",
              "weight": 7.6,
              "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            },
            {
              "text": "1 teaspoon freshly grated lemon zest",
              "weight": 2.0,
              "image": "https://www.edamam.com/food-img/540/5405605c8e9b284243f06c0b1587ab6f.jpg"
            },
            {
              "text": "2 1/2 teaspoons salt",
              "weight": 15.0,
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "1/8 teaspoon freshly ground black pepper",
              "weight": 0.2875,
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "Boiled Carrots with Prepared Horseradish for serving",
              "weight": 0.0,
              "image": "https://www.edamam.com/food-img/cc8/cc83e12eb36bdcc3015201c1cfac8656.jpg"
            },
            {
              "text": "Vegetable stock or water can be used instead of fish stock.",
              "weight": 440.62500000000006,
              "image": null
            }
          ],
          "calories": 1854.8078560482006,
          "totalWeight": 3723.3213312363664,
          "totalTime": 0.0,
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1854.8078560482006,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 51.07291896449727,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 14.081008962349243,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.23702529135,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 16.29377243539987,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 11.260253534399135,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 68.1729862495378,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 2.109037499977277,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 29.70477749957825,
              "unit": "g"
            },
            "SUGAR.added": {
              "label": "Sugars, added",
              "quantity": 24.949999999578246,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 268.26396631549096,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1399.93727985,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 8644.14269196764,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 591.5342225462068,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 465.8529827121099,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 6942.50598544796,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 11.354452543553405,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 8.702042093233972,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 3926.793662449828,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 492.64798454961374,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 18.394399999740145,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.6826902278499225,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 4.156856730849155,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 47.87403082514704,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 3.0198177737994345,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 257.827581949927,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 257.827581949927,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 31.197721505,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 36.20505827,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 9.236754763500002,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 126.06118368499999,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 3304.522463295368,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 92.74039280241003,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 78.57372148384195,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 70.40504481174621,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 22.724328749845935,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 8.436149999909109,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 536.5279326309819,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 466.64575995,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 360.1726121653183,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 59.15342225462068,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 110.91737683621663,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 147.7128933074034,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 63.080291908630024,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 79.10947357485429,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 560.9705232071183,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 54.738664949957084,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 20.438222221933493,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 140.2241856541602,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 319.7582100653196,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 299.212692657169,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 232.29367490764878,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 64.45689548748175,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1299.9050627083334,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 241.36705513333337,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 61.57836509000002,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 105.05098640416666,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 51.07291896449727,
              "hasRDI": true,
              "daily": 78.57372148384195,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 14.081008962349243,
                  "hasRDI": true,
                  "daily": 70.40504481174621,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.23702529135,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 16.29377243539987,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 11.260253534399135,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 68.1729862495378,
              "hasRDI": true,
              "daily": 22.724328749845935,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 66.06394874956052,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 2.109037499977277,
                  "hasRDI": true,
                  "daily": 8.436149999909109,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 29.70477749957825,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 24.949999999578246,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 268.26396631549096,
              "hasRDI": true,
              "daily": 536.5279326309819,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1399.93727985,
              "hasRDI": true,
              "daily": 466.64575995,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 8644.14269196764,
              "hasRDI": true,
              "daily": 360.1726121653183,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 591.5342225462068,
              "hasRDI": true,
              "daily": 59.15342225462068,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 465.8529827121099,
              "hasRDI": true,
              "daily": 110.91737683621663,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 6942.50598544796,
              "hasRDI": true,
              "daily": 147.7128933074034,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 11.354452543553405,
              "hasRDI": true,
              "daily": 63.080291908630024,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 8.702042093233972,
              "hasRDI": true,
              "daily": 79.10947357485429,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 3926.793662449828,
              "hasRDI": true,
              "daily": 560.9705232071183,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 492.64798454961374,
              "hasRDI": true,
              "daily": 54.738664949957084,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 18.394399999740145,
              "hasRDI": true,
              "daily": 20.438222221933493,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.6826902278499225,
              "hasRDI": true,
              "daily": 140.2241856541602,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 4.156856730849155,
              "hasRDI": true,
              "daily": 319.7582100653196,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 47.87403082514704,
              "hasRDI": true,
              "daily": 299.212692657169,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 3.0198177737994345,
              "hasRDI": true,
              "daily": 232.29367490764878,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 257.827581949927,
              "hasRDI": true,
              "daily": 64.45689548748175,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 257.827581949927,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 31.197721505,
              "hasRDI": true,
              "daily": 1299.9050627083334,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 36.20505827,
              "hasRDI": true,
              "daily": 241.36705513333337,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 9.236754763500002,
              "hasRDI": true,
              "daily": 61.57836509000002,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 126.06118368499999,
              "hasRDI": true,
              "daily": 105.05098640416666,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 3304.522463295368,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "bookmarked": false,
        "bought": false
      }
    ]
  }

// Sofia: ('https://api.edamam.com/search?q=fish&app_id=9e54ec99&app_key=5c942f3c3d7ee5e3ba76d9cb14cfe1fb&from=0&to=10')
// Felicia: ('https://api.edamam.com/search?q=chicken&app_id=024ea492&app_key=142143fddda1a7a392b5adaad116e123&from=0&to=10')
// Anna: ('https://api.edamam.com/search?q=fish&app_id=0d384271&app_key=07b683b7ada30b1385132db562595c8b&from=0&to=10')
// Fetch Länk:  `https://api.edamam.com/search?q=${searchTerm}&=app_id=9e54ec99&app_key=5c942f3c3d7ee5e3ba76d9cb14cfe1fb&from=0&to=10`

const fetchRecipes = (searchTerm) => {
    console.log(searchTerm)
    fetch (`https://api.edamam.com/search?q=${searchTerm}&=app_id=9e54ec99&app_key=5c942f3c3d7ee5e3ba76d9cb14cfe1fb&from=0&to=10`) 
      .then ((response) => {
        return response.json()
      }) 
      .then ((json) => {
        const hits = json.hits;
        hits.forEach((item) => {
          // recipeList.innerHTML ="" 
            recipeList.innerHTML += `
            <div class="recipe-card">
                <a class="recipe-card-link" href="${item.recipe.url}">
                    <img class="card-img" src=${item.recipe.image}>
                    <div class="card-text">
                        <p class="card-label">${item.recipe.label}</p>
                        <p class="card-cooking-time">Cooking time: ${item.recipe.totalTime} min.</p>
                    </div>
                </a>
            </div>
          `
        })
      })
    }
    //<p class="card-ingredients">Ingredients: ${item.recipe.ingredientLines}</p>
    //Ask if we should keep this or not
    //fetchRecipes('');

    // Add Next time:
    // 1. Restart button
    // 2. Add styling - maybe keep the buttons and be able to sort again? 
    // 3. Add functions to fetch recepies 

    fishBtn.addEventListener('click', () => { 
      recipeList.innerHTML =''
      fetchRecipes('fish')
      })
    chickenBtn.addEventListener('click', () => { 
      recipeList.innerHTML =''
      fetchRecipes('chicken')
      })
    meatBtn.addEventListener('click', () => { 
      recipeList.innerHTML =''
      fetchRecipes('meat')
      })
    vegetarianBtn.addEventListener('click', () => { 
      recipeList.innerHTML =''
      fetchRecipes('vegetarian')
      })