(() => {
    const supportButtons = document.querySelectorAll('.js-support-button');

    const popupSupport = document.querySelector('.js-popup-support');
    const popupSuccess = document.querySelector('.js-popup-success');
    const popupWriteOff = document.querySelector('.js-popup-write-off');
    const popupAccrue = document.querySelector('.js-popup-accrue');

    const closePopupButtons = document.querySelectorAll('.js-close-popup');
    const successButtons = document.querySelectorAll(
        '.js-success-popup-button'
    );
    const writeOffButtons = document.querySelectorAll(
        '.js-write-off-popup-button'
    );
    const accrueButtons = document.querySelectorAll('.js-accrue-popup-button');

    closePopupButtons.forEach((button) => {
        button?.addEventListener('click', closeAllPopup);
    });

    supportButtons.forEach((button) => {
        button?.addEventListener('click', () => {
            closeAllPopup();
            openPopup(popupSupport)();
        });
    });

    successButtons.forEach((button) => {
        button?.addEventListener('click', () => {
            closeAllPopup();
            openPopup(popupSuccess)();
        });
    });
    writeOffButtons.forEach((button) => {
        button?.addEventListener('click', () => {
            closeAllPopup();
            openPopup(popupWriteOff)();
        });
    });
    accrueButtons.forEach((button) => {
        button?.addEventListener('click', () => {
            closeAllPopup();
            openPopup(popupAccrue)();
        });
    });

    popupSupport?.addEventListener('click', overlayClose(popupSupport));
    popupSuccess?.addEventListener('click', overlayClose(popupSuccess));
    popupWriteOff?.addEventListener('click', overlayClose(popupWriteOff));
    popupAccrue?.addEventListener('click', overlayClose(popupAccrue));

    function closeAllPopup() {
        closePopup(popupSupport)();
        closePopup(popupSuccess)();
        closePopup(popupWriteOff)();
        closePopup(popupAccrue)();
    }

    function overlayClose(element) {
        return (evt) => {
            if (evt.target === element) {
                closePopup(element)();
            }
        };
    }

    function openPopup(element) {
        return () => {
            element?.classList.remove('hidden');
            element?.focus();
            document.body.classList.add('body-lock');
            trapFocus(element);
        };
    }

    function closePopup(element) {
        return () => {
            element?.classList.add('hidden');
            document.body.classList.remove('body-lock');
        };
    }

    function trapFocus(element) {
        const focusableElements = element?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (element && focusableElements) {
            const firstFocusableElement = focusableElements[0];
            const lastFocusableElement =
                focusableElements[focusableElements.length - 1];

            element.addEventListener('keydown', function (e) {
                const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

                if (!isTabPressed) {
                    return;
                }

                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            });
        }
    }
})();
