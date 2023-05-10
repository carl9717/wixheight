document.addEventListener('DOMContentLoaded', (event) => {
    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });

            observer.observe(document.documentElement, {
                childList: true,
                subtree: true
            });
        });
    }

    waitForElm('.ContainermainPage').then((elm) => {
        console.log('Element is ready');
        document.getElementById('comp-iin6k9si').classList.add('firstvh');
        document.getElementById('comp-lgt55zjq').classList.add('firstvh');
        document.getElementById('comp-lgxjpk8x').classList.add('firstvh');
        document.getElementById('comp-lgxjpk981').classList.add('firstvh');
        document.getElementById('comp-iseboi5q').classList.add('firstvh');
        document.getElementById('comp-lgt6qqs5').classList.add('firstvh');
        document.getElementById('comp-lgugkmpi').classList.add('firstvh');
        document.getElementById('comp-lgxjh3tj').classList.add('firstvh');
        document.getElementById('comp-lhbncf8s').classList.add('firstvh');
        document.getElementById('comp-lgugxd7p').classList.add('firstvh');
        document.getElementById('comp-lgywliyf').classList.add('firstvh');
    });
});