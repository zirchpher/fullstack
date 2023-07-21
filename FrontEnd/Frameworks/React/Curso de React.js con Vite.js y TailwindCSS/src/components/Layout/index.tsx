interface Props {
  children: JSX.Element;
}

function Layout({ children }: Props) {
  return (
    <main className="flex flex-col items-center mt-16">
      {children}
    </main>
  );
}

export { Layout };
