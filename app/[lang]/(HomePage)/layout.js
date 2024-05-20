const HomePageLayout = ({ children, category, newArrival, trendingProducts }) => {
    return (
        <>
            {children}
            {category}
            {newArrival}
            {trendingProducts}
        </>
    );
};

export default HomePageLayout;
