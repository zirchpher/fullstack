interface Props {
  children: JSX.Element;
}

function Layout({ children }: Props) {
  return (
    <main className="flex flex-col items-center mt-20">
      {children}
    </main>
  );
}

export { Layout };
