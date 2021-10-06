import React, { useState } from "react";
import { ReactComponent as ModalImg } from "assets/modal.svg";
import "./ToastModal.scss";
const ToastModal = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div className="toastModalContainer">
      <button className="popBtn" onClick={() => setDisplay(true)}>
        <ModalImg />
      </button>
      {display && (
        <div className="modalOverlay" onClick={() => setDisplay(false)}>
          <div
            className="modal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button className="closeBtn" onClick={() => setDisplay(false)}>
              X
            </button>
            <h5>Modal Message</h5>
          </div>
        </div>
      )}
      <div className="contents">
        <h3>Content</h3>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum non
          omnis suscipit voluptates labore, beatae ipsa perferendis temporibus
          cum. Vel perferendis doloremque sit eligendi ipsa ea libero molestiae
          vitae. Sapiente. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deserunt molestias maiores vero ducimus deleniti cum asperiores
          quis ipsum repudiandae est assumenda eligendi odit alias, quibusdam
          optio. Nostrum rerum eos veritatis! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat eius eaque accusantium. Maiores,
          est, et dolores quo corrupti, quidem praesentium fuga nobis deleniti
          expedita soluta molestias nam reprehenderit id distinctio? Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Voluptate voluptatum
          iste modi autem expedita tempora blanditiis aliquid incidunt natus!
          Ipsum non impedit laboriosam sapiente est corporis ut rerum magni
          consequuntur! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Reiciendis officiis dicta deserunt laborum, totam dolores
          accusantium doloribus nihil vitae dolorum ipsa architecto, quos
          fugiat, quas blanditiis est inventore sequi beatae.
        </p>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          praesentium, laudantium dolorum iste, quas eum modi officia,
          repudiandae laboriosam expedita adipisci dicta sit quidem omnis ipsam
          nam consequatur? Quis, ad. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Maiores rem earum excepturi sunt delectus dolor
          praesentium sint mollitia labore voluptatem similique unde tempora,
          aut qui quo itaque adipisci incidunt accusantium? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Soluta eligendi unde odio
          facilis nobis hic itaque fugiat accusantium, doloribus recusandae,
          ipsa nesciunt possimus ad tempora dolore, eos ab qui. Nam. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Soluta, officiis nulla
          error odio aperiam fuga eum incidunt repellendus laudantium deleniti
          harum non sequi iste tempora, provident mollitia omnis illo
          distinctio.
        </p>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo
          ullam quod corporis iusto tempore vero tenetur, illum pariatur neque
          totam adipisci. Quod vero eaque corrupti ut laboriosam quis unde.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
          incidunt, quia temporibus ex unde cupiditate illo sequi facilis labore
          culpa dignissimos libero voluptatem quos suscipit ab cum. Expedita,
          ducimus molestiae! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Doloremque necessitatibus molestias, dolor, et voluptate
          quibusdam tenetur accusamus veniam quas impedit suscipit excepturi!
          Sed autem labore harum ut ipsa? Natus, officia!
        </p>
      </div>
    </div>
  );
};

export default ToastModal;
