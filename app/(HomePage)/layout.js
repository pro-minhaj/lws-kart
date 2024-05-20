const HomePageLayout = ({ children, category, newArrival }) => {
    return (
        <>
            {children}
            {category}
            {newArrival}
        </>
    );
};

export default HomePageLayout;
