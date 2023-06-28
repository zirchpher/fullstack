import { GrFacebook, GrInstagram, GrReddit, GrTwitter } from "react-icons/gr";

function Footer() {
  return (
    <footer className="bg-secondary-color text-white p-4">
      <div className="md:flex flex-row-reverse justify-around items-center">
        <div className="mt-4">
          <p className="social-media">
            <GrFacebook className="" />
            <span className="ml-2">@platzif</span>
          </p>
          <p className="social-media">
            <GrTwitter className="" />
            <span className="ml-2">@platzifood</span>
          </p>
          <p className="social-media">
            <GrInstagram className="" />
            <span className="ml-2">@foodplz</span>
          </p>
          <p className="social-media">
            <GrReddit className="" />
            <span className="ml-2">@plfood</span>
          </p>
        </div>

        <ul className="my-4 md:list-disc">
          <li>Soporte</li>
          <li>Acerca de Nosotros</li>
          <li>Contacto</li>
          <li>Políticas de Privacidad</li>
        </ul>
      </div>
    </footer>
  );
}

export { Footer };
