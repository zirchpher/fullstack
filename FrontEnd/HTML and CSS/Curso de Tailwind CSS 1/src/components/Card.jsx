function Card() {
  return (
    <div className="mt-4 md:w-1/2 md:flex md:bg-white rounded-lg">
      <div>
        <img
          className="w-full rounded-lg"
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80"
          alt=""
        />
      </div>
      <div className="relative mx-2 p-2 shadow-lg bg-white md:bg-transparent rounded-lg -mt-2">
        <h2 className="text-xl tracking-tight font-semibold uppercase text-gray-900">
          Hamburguesa con Queso
        </h2>
        <p className="text-gray-700 leading-snug ">
          Hamburguesa con queso y aderezo chipotle.
        </p>
        <div className="mt-2 text-sm font-semibold text-gray-700">MXN $15</div>
        <div className="mt-2 text-xs text-yellow-700">
          &starf; &starf;&starf;&starf;&star; / 36 reseñas
        </div>
      </div>
    </div>
  );
}

export { Card };
