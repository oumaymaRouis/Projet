import React from "react";
import dell from "../assets/dell.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import Suggestion from "../components/suggestions";
import "./selectedCard.css";

function SelectedCard(props) {
  return (
    <div className="lastcard">
      <form>
        <div className="main">
          <div className="title-container1">
            <h1> {props.price}</h1>
          </div>
          <div className="img-container">
            <img className="dell" src={props.imagepc} />
          </div>
          <div className="name-container">
            <h2>{props.title}</h2>
            <br></br>
            <div className="nom-container">
              <h3>
                <span className="societe">{props.societe} </span>
                <span className="stock">{props.stock} </span>
                <FontAwesomeIcon icon={faFloppyDisk} className="icon" />
              </h3>
              <div className="icon2-container">
                <FontAwesomeIcon icon={faBookmark} className="icon2" />
                <FontAwesomeIcon icon={faShareAlt} className="icon3" />
              </div>
              <div className="icon2-writing">
                <h1>
                  <span className="category"> PC category · </span>
                  <span className="gaming"> gaming , Ultrabook </span>
                </h1>
              </div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Écran</th>
                <th>Processeur</th>
                <th>Mémoire RAM</th>
                <th>Disque dur</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>14 Pouces HD</td>
                <td>{props.processeur}</td>
                <td>{props.memoireRam}</td>
                <td>{props.disqueDur}</td>
              </tr>
            </tbody>
          </table>
          <div className="description-container">
            <h1>Overview</h1>
            <p>{props.description}</p>
          </div>
          <div className="fiche-container">
            <h1>Fiche Technique</h1>
            <div className="checkbox-container1">
              <label class="container1">
                <div className="words">Processeur: {props.processeur}</div>
                <input type="checkbox" />
                <span class="checkmark1"></span>
              </label>
              <br></br>
              <label class="container1">
                <div className="words">Mémoire: {props.memoireRam}</div>
                <input type="checkbox" />
                <span class="checkmark1"></span>
              </label>
              <br></br>
              <label class="container1">
                <div className="words">Disque Dur : {props.disqueDur}</div>
                <input type="checkbox" />
                <span class="checkmark1"></span>
              </label>
              <br></br>
              <label class="container1">
                <div className="words">
                  Carte Graphique: {props.carteGraphique}
                </div>
                <input type="checkbox" />
                <span class="checkmark1"></span>
              </label>
            </div>
          </div>
          <div className="line-container">
            <hr />
          </div>

          <div className="underline-container">
            <h1>Are You Interested In This Laptop ?</h1>
            <div className="btn-container">
              <button className="btn btn-yellow" href={props.productURL}>
                Check it out
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="right-side-container">
        <Suggestion></Suggestion>
      </div>
    </div>
  );
}

export default SelectedCard;
