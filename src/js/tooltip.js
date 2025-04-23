(() => {
    const TOOLTIP_BOTTOM_CLASS = 'tooltip_bottom';
    const TOOLTIP_ALIGN_LEFT_CLASS = 'tooltip_left';

    document.addEventListener('DOMContentLoaded', function () {
        window.addEventListener('resize', initTooltip);
        initTooltip();
    });

    function initTooltip() {
        const triggers = document.querySelectorAll('.js-tooltip-trigger');

        triggers?.forEach((trigger) => {
            const tooltip = trigger.querySelector('.js-tooltip');

            if (tooltip) {
                adjustTooltipPosition(tooltip);
            }
        });
    }

    function adjustTooltipPosition(tooltip) {
        tooltip.classList.remove(
            TOOLTIP_BOTTOM_CLASS,
            TOOLTIP_ALIGN_LEFT_CLASS
        );

        const tooltipRect = tooltip.getBoundingClientRect();

        if (tooltipRect.top < 0) {
            tooltip.classList.add(TOOLTIP_BOTTOM_CLASS);
        }

        if (tooltipRect.right > window.innerWidth) {
            tooltip.classList.add(TOOLTIP_ALIGN_LEFT_CLASS);
        }
    }
})();
