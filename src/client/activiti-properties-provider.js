


export default class ActivitiPropertiesProvider {

    constructor(propertiesPanel) {
        propertiesPanel.registerProvider(500, this);
    }

    getGroups(element) {
        return (groups) => {

            // if (is(element, 'bpmn:StartEvent')) {
            //     groups.push()
            // }

            if (is(element, 'bpmn:task')) {
                groups.push(this.createTaskGroup())
            }

            return groups;
        }
    }

    createTaskGroup(element) {

    }
}

ActivitiPropertiesProvider.$inject = ['propertiesPanel'];