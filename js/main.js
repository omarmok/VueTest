var vm = new Vue({
    el: '#app',
    data: {

        list: [{
            name: "lion",
            image: "./image/lion.jpg",
            description: "The lion (Panthera leo) is a species in the family Felidae and a member of the genus Panthera. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions have a prominent mane. With a typical head-to-body length of 184–208 cm (72–82 in) they are larger than females at 160–184 cm (63–72 in). It is a social species, forming groups called prides. A lion pride consists of a few adult males, related females and cubs. Groups of female lions usually hunt together, preying mostly on large ungulates. The lion is an apex and keystone predator; although some lions scavenge when opportunities occur and have been known to hunt humans, the species typically does not.",
            url: "https://en.wikipedia.org/wiki/Lion",

        }, {

            name: "Zebras",
            image: "./image/220px-Plains_Zebra_Equus_quagga.jpg",
            description: "",
            url: "https://en.wikipedia.org/wiki/Zebra",
        }, {
            name: "Cat",
            image: "./image/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg",
            description: "The cat (Felis catus) is a domestic species of small carnivorous mammal.[1][2] It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.[4] A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.[5] Domestic cats are valued by humans for companionship and their ability to hunt rodents. About 60 cat breeds are recognized by various cat registries.[6]",
            url: "https://en.wikipedia.org/wiki/Cat",
        }],
        total: 0,
        items: [
            { category: 0 }

        ],

        name: "lion",
        image: "./image/lion.jpg",
        description: "The lion (Panthera leo) is a species in the family Felidae and a member of the genus Panthera. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions have a prominent mane. With a typical head-to-body length of 184–208 cm (72–82 in) they are larger than females at 160–184 cm (63–72 in). It is a social species, forming groups called prides. A lion pride consists of a few adult males, related females and cubs. Groups of female lions usually hunt together, preying mostly on large ungulates. The lion is an apex and keystone predator; although some lions scavenge when opportunities occur and have been known to hunt humans, the species typically does not.",
        url: "https://en.wikipedia.org/wiki/Lion",

    },
    methods: {
        lionInfo: function () {
            return "https://quran.com/"
        },
        addcategory() {
            this.items.push({
                category: this.category++,
                total: this.total++,
            })

        },

    }
})




