describe("Form test", () => {
    it("Can fill the form", () => {
        cy.visit("/");
        cy.get("form");

        cy.get('input[name="name"]')
            .type("Molly")
            .should("have.value", "Molly");

        cy.get('input[name="email"]')
            .type("molly@dev.dev")
            .should("have.value","molly@dev.dev");

        cy.get('textarea[name="message"]')
            .type("Hi. Do you mind if I ask you some silly questions?")
            .should("have.value","Hi. Do you mind if I ask you some silly questions?");    

        cy.server();
        cy.route({
            url: "/users/**",
            method: "POST",
            response: { status: "Form Saved!", code: 201}
        })

        cy.get("form").submit();

        cy.contains("Form Saved!");
    })
})