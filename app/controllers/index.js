Alloy.createWidget('com.bduyng.intropages', {
    /**
     * This should be an array with all the views and their options
     * @type {Array}
     */
    views: [
        {
            /**
             * This will be the primary text of page onboarding.
             * @type {[String]}
             */
            title: "LOREM IPSUM\nDOLOR SIT",

            /**
             * This will be secondary text that will further explain the feature.
             * @type {[String]}
             */
            description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",

            /**
             * Local or remote url / can be video or image.
             * The media which will be shown in the background of the screen.
             * Video should automatically play after view transition.
             * @type {[String]}
             */
            media: "/images/intro/1.png"
        },
        {
            title: "PROIN GRAVIDA\nVELIT NISL, EGET",
            description: "Donec fermentum nisl nec ligula placerat, a convallis mi rutrum.",
            media: "/images/intro/2.png"
        },
        {
            title: "NULLAM LIBERO\nTURPIS",
            description: "Fusce massa neque, gravida suscipit lorem a, vehicula convallis orci.",
            media: "/images/intro/3.png"
        }
    ],
    titles: {
        left: 20, right: 50, bottom: 150,
        color: "white",
        font: {
            fontSize: 30,
            fontWeight: "bold"
        }
    },
    descriptions: {
        left: 20, right: 50, bottom: 90,
        color: "white",
        font: {
            fontSize: 16
        }
    }
}).getView().open();