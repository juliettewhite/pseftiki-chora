const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('alliance')
        .setDescription('form an alliance!'),
    async execute( interaction, client )
    {
     
        const modal = new ModalBuilder()
            .setCustomId(`inputAlliance`)
            .setTitle(`Alliance Selector`);

        const textInput = new TextInputBuilder()
            .setCustomId("allianceInput")
            .setLabel("Enter Country To Form Alliance")
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

            modal.addComponents(new ActionRowBuilder().addComponents(textInput));

            await interaction.showModal(modal);
        
    }
}
