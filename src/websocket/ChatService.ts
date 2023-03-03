import { io } from "../http"


/**
 * Enviar informação(Envio personalizado, pode definir o cliente)
 * socket.emit()
 * Enviar para todos os usuários
 * io.emit()
 */

io.on("connect", socket => {
    // Mensagem de boas vindas
    socket.emit("chat_iniciado", {
        message: "Seu chat foi iniciado",
    });

})