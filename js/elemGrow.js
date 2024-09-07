/* Copyright 2024 Matthew DeCalzadilla */

// Grow the size of an art card when the mouse hovers over it
const ART_CARDS = document.getElementsByClassName("art-card");
const GROW_BUTTONS = document.getElementsByClassName("grow-button");

for (let i = 0; i < ART_CARDS.length; i++) {
    const MAX_WTH_VW = 65;

    const growthRate = 1;
    const intervalRate = 8;

    const CARD = ART_CARDS.item(i);
    const CARD_RECT = CARD.getBoundingClientRect();

    const ORIGINAL_WTH_PX = CARD_RECT.width;
    const ORIGINAL_WTH_VW = Math.ceil(ORIGINAL_WTH_PX  / window.innerWidth  * 100);
    CARD.style.width = ORIGINAL_WTH_VW.toString() + "vw";
    CARD.style.height = CARD.style.width;

    let growfunc = null;

    let card_wth_vw = Math.ceil(CARD_RECT.width / window.innerWidth * 100);

    CARD.addEventListener("mouseenter", () => {
        clearInterval(growfunc);
        growfunc = setInterval(() => {
            if (card_wth_vw < MAX_WTH_VW) {
                CARD.style.width = (card_wth_vw + growthRate).toString() + "vw";
                CARD.style.height = CARD.style.width;

                card_wth_vw = parseInt(/^[0-9]+/g.exec(CARD.style.width));
                console.log(card_wth_vw);
            }

            if (card_wth_vw > MAX_WTH_VW) {
                CARD.style.width = MAX_WTH_VW.toString() + "vw";
                CARD.style.height = CARD.style.width;
            }
        }, intervalRate);
    });
    
    CARD.addEventListener("mouseleave", () => {
        clearInterval(growfunc);
        growfunc = setInterval(() => {
            if (card_wth_vw > ORIGINAL_WTH_VW) {
                CARD.style.width = (card_wth_vw - growthRate * 3).toString() + "vw";
                CARD.style.height = CARD.style.width;

                card_wth_vw = parseInt(/^[0-9]+/g.exec(CARD.style.width));
                console.log(card_wth_vw);
            }

            if (card_wth_vw < ORIGINAL_WTH_VW) {
                CARD.style.width = ORIGINAL_WTH_VW.toString() + "vw";
                CARD.style.height = CARD.style.width;
            }
        }, intervalRate);
    });
}

for (let i = 0; i < GROW_BUTTONS.length; i++) {
    const intervalRate = 7;
    const growthRate = 1;

    const BUTTON = GROW_BUTTONS.item(i);
    const BUTTON_RECT = BUTTON.getBoundingClientRect();

    const ORIGINAL_WTH_PX = BUTTON_RECT.width;
    const ORIGINAL_WTH_VW = Math.ceil(ORIGINAL_WTH_PX  / window.innerWidth  * 100);

    const ORIGINAL_HGT_PX = BUTTON_RECT.height;
    const ORIGINAL_HGT_VH = Math.ceil(ORIGINAL_HGT_PX  / window.innerHeight * 100);

    BUTTON.style.width = ORIGINAL_WTH_VW.toString() + "vw";
    BUTTON.style.height = ORIGINAL_HGT_VH.toString() + "vh";

    const MAX_WTH_VW = ORIGINAL_WTH_VW + 2;
    const MAX_HGT_VH = ORIGINAL_HGT_VH + 1;

    let growfunc = null;

    let button_wth_vw = Math.ceil(BUTTON_RECT.width / window.innerWidth * 100);
    let button_hgt_vh = Math.ceil(BUTTON_RECT.height / window.innerHeight * 100);

    BUTTON.addEventListener("mouseenter", () => {
        clearInterval(growfunc);
        growfunc = setInterval(() => {
            if (button_wth_vw < MAX_WTH_VW) {
                BUTTON.style.width = (button_wth_vw + growthRate).toString() + "vw";
                BUTTON.style.height = (button_hgt_vh + growthRate).toString() + "vh";

                button_wth_vw = parseInt(/^[0-9]+/g.exec(BUTTON.style.width));
                button_hgt_vh = parseInt(/^[0-9]+/g.exec(BUTTON.style.height));
            }

            if (button_wth_vw > MAX_WTH_VW) {
                BUTTON.style.width = MAX_WTH_VW.toString() + "vw";
                BUTTON.style.height = MAX_HGT_VH.toString() + "vh";
            }
        }, intervalRate);
    });
    
    BUTTON.addEventListener("mouseleave", () => {
        clearInterval(growfunc);
        growfunc = setInterval(() => {
            if (button_wth_vw > ORIGINAL_WTH_VW) {
                BUTTON.style.width = (button_wth_vw - growthRate * 3).toString() + "vw";
                BUTTON.style.height = (button_hgt_vh - growthRate * 3).toString() + "vh";

                button_wth_vw = parseInt(/^[0-9]+/g.exec(BUTTON.style.width));
                button_hgt_vh = parseInt(/^[0-9]+/g.exec(BUTTON.style.height));
            }

            if (button_wth_vw < ORIGINAL_WTH_VW) {
                BUTTON.style.width = ORIGINAL_WTH_VW.toString() + "vw";
                BUTTON.style.height = ORIGINAL_HGT_VH.toString() + "vh";
            }
        }, intervalRate);
    });
}