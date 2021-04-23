import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui icons
import Subject from "@material-ui/icons/Subject";
import Delete from "@material-ui/icons/Delete";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import cardsStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/sectionCards.js";

const style = {
  ...cardsStyle,
};

const useStyles = makeStyles(style);

export default function CardExampleCardRotating({s1, s2, s1Img, s2Img}) {
  React.useEffect(() => {
    addStylesForRotatingCards();
    return function cleanup() {};
  });
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = cardHeight + 25 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 25 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  const classes = useStyles();
  return (
    <GridContainer >
      <GridItem xs={12} sm={12} md={6} lg={6} >
        <div className={classes.rotatingCardContainer}>
          <Card background className={classes.cardRotate}>
            <div
              className={`${classes.front} ${classes.wrapperBackground}`}
              style={{
                backgroundImage: `url(${s1Img})`,
              }}
            >
              <CardBody background className={classes.cardBodyRotate}>
                <h6 className={classes.cardCategoryWhite}></h6>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <h3 className={classes.cardTitleWhite}>{s1}</h3>
                </a>
                <p className={classes.cardDescriptionWhite}></p>
              </CardBody>
            </div>
            <div
              className={`${classes.back} ${classes.wrapperBackground}`}
              style={{
                backgroundImage: `url(${s2Img})`,
              }}
            >
              <CardBody background className={classes.cardBodyRotate}>
                <h3 className={classes.cardTitleWhite}>{s2}</h3>
                <div className={classes.textCenter}></div>
              </CardBody>
            </div>
          </Card>
        </div>
      </GridItem>
    </GridContainer>
  );
}
