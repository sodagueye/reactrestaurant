import React, { useEffect, useState } from "react";

import { FiUsers } from "react-icons/fi";
import { FaSellsy } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";
import "./Cards.css";
export default function Card() {
 
 
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-3">
          <div class="card shadow cartes p-2">
            <div class="card-body d-flex align-items-center flex-row">
              <div>
                <p> plats</p>
              </div>
              <p className="fs-2">
                <BiSolidDish />
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card shadow cartes p-2">
            <div class="card-body d-flex flex-row align-items-center">
              <p class="card-text"> Utilisateurs</p>
              <p className="fs-2">
                <FiUsers />
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card shadow cartes p-2">
            <div class="card-body d-flex flex-row align-items-center">
              <h3 class="card-text">Ventes</h3>
              <p className="fs-2">
                <FaSellsy />
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card shadow cartes  p-2">
            <div class="card-body d-flex flex-row align-items-center">
              <h3 className="card-text">Recette</h3>
              <p className="fs-2">
                <GiMoneyStack />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
