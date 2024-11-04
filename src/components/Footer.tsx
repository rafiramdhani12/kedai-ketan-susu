import { Instagram, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-neutral text-neutral-content p-3">
        <aside>
          <p>
            ketan susu
            <br />
            2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <Link to={"/"}>
              <div className="flex gap-4 hover:text-green-500">
                <Phone /> : 082112584507
              </div>
            </Link>
            <Link to={"/"}>
              <div className="gap-4 flex hover:text-red-500">
                <Instagram /> : k&2
              </div>
            </Link>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
