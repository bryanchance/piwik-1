/*!
 * Piwik - Web Analytics
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

/**
 * Usage:
 * <div class="languageSelection">
 * </div>
 */
angular.module('piwikApp').directive('languageSelection', function() {

    return {
        restrict: 'C',
        link: function(scope, element, attr, ctrl) {

            function postLanguageChange () {
                var value = $(this).attr('value');
                if (value) {
                    element.find('#language').val(value).parents('form').submit();
                }
            }

            element.on('click', 'a[value]', postLanguageChange);
            scope.$on('$destroy', function() {
                element.off('click', 'a[value]', postLanguageChange);
            });
        }
    };
});