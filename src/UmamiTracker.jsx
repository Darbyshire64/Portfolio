function UmamiTracker() {
  const location = useLocation();

  useEffect(() => {
    window.umami?.track('pageview', {
      url: location.pathname + location.search
    });
  }, [location]);

  return null;
}
