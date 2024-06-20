type Component = () => JSX.Element;

// type Component<TProps> = (props: TProps) => JSX.Element;

type PropsComponent<TProps> = (props: TProps) => JSX.Element;