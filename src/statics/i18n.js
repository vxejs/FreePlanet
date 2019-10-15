import msg_website from '../db/i18n_website'

const msgglobal = {
  it: {
    grid: {
      editvalues: 'Modifica Valori',
      showprevedit: 'Mostra Eventi Passati'
    },
    otherpages: {
      admin : {
        menu: 'Amministrazione',
        eventlist: 'Prenotazioni',
        usereventlist: 'Prenotazioni Utenti',
        userlist: 'Lista Utenti',
      },
      manage: {
        menu: 'Gestione'
      }
    },
    sendmsg: {
      write: 'scrive'
    },
    dialog: {
      ok: 'Ok',
      yes: 'Si',
      no: 'No',
      delete: 'Elimina',
      cancel: 'Annulla',
      update: 'Aggiorna',
      today: 'Oggi',
      book: 'Prenota',
      sendmsg: 'Invia Msg',
      msg: {
        titledeleteTask: 'Elimina Task',
        deleteTask: "Vuoi Eliminare {mytodo}?"
      }
    },
    comp: {
      Conta: "Conta",
    },
    db: {
      recupdated: 'Record Aggiornato',
      recfailed: 'Errore durante aggiornamento Record',
      deleterecord: 'Elimina Record',
      deletetherecord: 'Eliminare il Record?',
      deletedrecord: 'Record Cancellato',
      recdelfailed: 'Errore durante la cancellazione del Record',
    },
    components: {
      authentication: {
        login: {
          facebook: 'Facebook'
        },
        email_verification: {
          title: 'Inizia la tua registrazione',
          introduce_email: 'inserisci la tua email',
          email: 'Email',
          invalid_email: 'La tua email è invalida',
          verify_email: 'Verifica la tua email',
          go_login: 'Torna al Login',
          incorrect_input: 'Inserimento incorretto.',
          link_sent: 'Per confermare la Registrazione, leggi la tua casella di posta e Clicca su "Verifica Email".\nSe non la trovi, cerca nella cartella Spam.'
        }
      }
    },
    fetch: {
      errore_generico: 'Errore Generico',
      errore_server: 'Impossibile accedere al Server. Riprovare Grazie',
      error_doppiologin: 'Rieseguire il Login. Accesso aperto da un altro dispositivo.',
    },
    user: {
      notregistered: 'Devi registrarti al servizio prima di porter memorizzare i dati',
      loggati: 'Utente non loggato'
    },
    reg: {
      page_title: 'Registrazione',
      incorso: 'Registrazione in corso...',
      richiesto: 'Campo Richiesto',
      email: 'Email',
      date_reg: 'Data Reg.',
      perm: 'Permessi',
      username: 'Nome Utente',
      name: 'Nome',
      surname: 'Cognome',
      username_login: 'Nome Utente o email',
      password: 'Password',
      repeatPassword: 'Ripeti password',
      terms: "Accetto i termini e le condizioni",
      submit: "Registrati",
      title_verif_reg: "Verifica Registrazione",
      verificato: "Verificato",
      non_verificato: "Non Verificato",
      forgetpassword: "Password dimenticata?",
      err: {
        required: 'è richiesto',
        email: 'inserire una email valida',
        errore_generico: 'Si prega di compilare correttamente i campi',
        atleast: 'dev\'essere lungo almeno di',
        complexity: 'deve contenere almeno 1 minuscola, 1 maiuscola e 1 cifra',
        notmore: 'non dev\'essere lungo più di',
        char: 'caratteri',
        terms: 'Devi accettare le condizioni, per continuare.',
        duplicate_email: 'l\'Email è già stata registrata',
        duplicate_username: 'L\'Username è stato già utilizzato',
        sameaspassword: 'Le password devono essere identiche',
      },
      tips: {
        email: 'inserisci la tua email',
        username: 'username lunga almeno 6 caratteri',
        password: 'deve contenere 1 minuscola, 1 maiuscola e 1 cifra',
        repeatpassword: 'ripetere la password',

      }
    },
    login: {
      page_title: 'Login',
      incorso: 'Login in corso',
      enter: 'Login',
      errato: "Username o password errata. Riprovare",
      completato: 'Login effettuato!',
    },
    reset: {
      title_reset_pwd: "Reimposta la tua Password",
      send_reset_pwd: 'Invia Reimposta la password',
      incorso: 'Richiesta Nuova Email...',
      email_sent: 'Email inviata',
      check_email: 'Controlla la tua email, ti arriverà un messaggio con un link per reimpostare la tua password. Questo link, per sicurezza, scadrà dopo 4 ore.',
      title_update_pwd: 'Aggiorna la tua password',
      update_password: 'Aggiorna Password',
    },
    logout: {
      uscito: 'Sei Uscito',
    },
    errors: {
      graphql: {
        undefined: 'non definito'
      }
    },
    todo: {
      titleprioritymenu: 'Priorità:',
      inserttop: 'Inserisci il Task in cima',
      insertbottom: 'Inserisci il Task in basso',
      edit: 'Descrizione Task:',
      completed: 'Ultimi Completati',
      usernotdefined: 'Attenzione, occorre essere Loggati per poter aggiungere un Todo',
      start_date: 'Data Inizio',
      status: 'Stato',
      completed_at: 'Data Completamento',
      expiring_at: 'Data Scadenza',
      phase: 'Fase',
    },
    notification: {
      status: 'Stato',
      ask: 'Attiva le Notifiche',
      waitingconfirm: 'Conferma la richiesta di Notifica',
      confirmed: 'Notifiche Attivate!',
      denied: 'Notifiche Disabilitate! Attenzione così non vedrai arrivarti i messaggi. Riabilitali per vederli.',
      titlegranted: 'Permesso Notifiche Abilitato!',
      statusnot: 'Stato Notifiche',
      titledenied: 'Permesso Notifiche Disabilitato!',
      title_subscribed: 'Sottoscrizione a FreePlanet.app!',
      subscribed: 'Ora potrai ricevere i messaggi e le notifiche.',
      newVersionAvailable: 'Aggiorna',
    },
    connection: 'Connessione',
    proj: {
      newproj: 'Titolo Progetto',
      newsubproj: 'Titolo Sotto-Progetto',
      insertbottom: 'Inserisci Nuovo Project',
      longdescr: 'Descrizione',
      hoursplanned: 'Ore Preventivate',
      hoursadded: 'Ore Aggiuntive',
      hoursworked: 'Ore Lavorate',
      begin_development: 'Inizio Sviluppo',
      begin_test: 'Inizio Test',
      progresstask: 'Progressione',
      actualphase: 'Fase Attuale',
      hoursweeky_plannedtowork: 'Ore settimanali previste',
      endwork_estimate: 'Data fine lavori stimata',
      privacyread: 'Chi lo puo vedere:',
      privacywrite: 'Chi lo puo modificare:',
      totalphases: 'Totale Fasi',
      themecolor: 'Tema Colore',
      themebgcolor: 'Tema Colore Sfondo'
    },
    cal: {
      booked: 'Prenotato',
      booked_error: 'Prenotazione non avvenuta. Riprovare più tardi',
      booking: 'Prenota Evento',
      titlebooking: 'Prenotazione',
      modifybooking: 'Modifica Prenotazione',
      cancelbooking: 'Cancella Prenotazione',
      canceledbooking: 'Prenotazione Cancellata',
      cancelederrorbooking: 'Cancellazione non effettuata, Riprovare più tardi',
      event: 'Evento',
      starttime: 'Dalle',
      endtime: 'alle',
      duration: 'Durata',
      hours: 'Orario',
      when: 'Quando',
      where: 'Dove',
      teacher: 'Con',
      enterdate: 'Inserisci data',
      details: 'Dettagli',
      infoextra: 'Date e Ora Extra:',
      alldayevent: 'Tutto il giorno',
      eventstartdatetime: 'Data e Ora Inizio Evento',
      enterEndDateTime: 'Data e Ora Fine Evento',
      selnumpeople: 'Partecipanti',
      selnumpeople_short: 'Num',
      msgbooking: 'Messaggio da inviare',
      showinfo: 'Vedi Info',
      bookingtextdefault: 'Mi prenoto all\'evento',
      bookingtextdefault_of: 'di',
      data: 'Data',
      teachertitle: 'Insegnante',
    },
    newsletter: {
      title: 'Desideri ricevere la nostra Newsletter?',
      name: 'Il tuo Nome',
      surname: 'Il tuo Cognome',
      namehint: 'Nome',
      surnamehint: 'Cognome',
      email: 'La tua Email',
      submit: 'Iscriviti',
      reset: 'Cancella',
      typesomething: 'Compilare correttamente il campo',
      acceptlicense: 'Accetto la licenza e i termini',
      license: 'Devi prima accettare la licenza e i termini',
      submitted: 'Iscritto'
    },
    privacy_policy:'Privacy Policy',
    cookies: 'Usiamo i Cookie per una migliore prestazione web.'
  },
  es: {
    grid: {
      editvalues: 'Cambiar valores',
      showprevedit: 'Mostrar eventos pasados'
    },
    otherpages: {
      admin : {
        menu: 'Administración',
        eventlist: 'Reserva',
        usereventlist: 'Reserva Usuarios',
        userlist: 'Lista de usuarios',
      },
      manage: {
        menu: 'Gestionar'
      }
    },
    sendmsg: {
      write: 'escribe'
    },
    dialog: {
      ok: 'Vale',
      yes: 'Sí',
      no: 'No',
      delete: 'Borrar',
      cancel: 'Cancelar',
      update: 'Actualiza',
      today: 'Hoy',
      book: 'Reserva',
      sendmsg: 'Envia Mensaje',
      msg: {
        titledeleteTask: 'Borrar Tarea',
        deleteTask: 'Quieres borrar {mytodo}?'
      }
    },
    comp: {
      Conta: "Conta",
    },
    db: {
      recupdated: 'Registro Actualizado',
      recfailed: 'Error durante el registro de actualización',
      deleterecord: 'Eliminar registro',
      deletetherecord: '¿Eliminar el registro?',
      deletedrecord: 'Registro cancelado',
      recdelfailed: 'Error durante la eliminación del registro',
    },
    components: {
      authentication: {
        login: {
          facebook: 'Facebook'
        },
        email_verification: {
          title: 'Crea una cuenta',
          introduce_email: 'ingrese su dirección de correo electrónico',
          email: 'Email',
          invalid_email: 'Tu correo electrónico no es válido',
          verify_email: 'Revisa tu email',
          go_login: 'Vuelve al Login',
          incorrect_input: 'Entrada correcta.',
          link_sent: 'Para confirmar el registro, lea su buzón y haga clic en "Verificar correo electrónico".\n' + 'Si no lo encuentras, busca en la carpeta Spam.'
        }
      }
    },
    fetch: {
      errore_generico: 'Error genérico',
      errore_server: 'No se puede acceder al Servidor. Inténtalo de nuevo, Gracias',
      error_doppiologin: 'Vuelva a iniciar sesión. Acceso abierto por otro dispositivo.',
    },
    user: {
      notregistered: 'Debe registrarse en el servicio antes de poder almacenar los datos',
      loggati: 'Usuario no ha iniciado sesión'
    },
    reg: {
      page_title: 'Registro',
      incorso: 'Registro en curso...',
      richiesto: 'Campo requerido',
      email: 'Email',
      date_reg: 'Fecha Reg.',
      perm: 'Permisos',
      username: 'Nombre usuario',
      name: 'Nombre',
      surname: 'Apellido',
      username_login: 'Nombre usuario o email',
      password: 'contraseña',
      repeatPassword: 'Repetir contraseña',
      terms: "Acepto los términos y condiciones",
      submit: "Registrarse",
      title_verif_reg: "Verifica registro",
      verificato: "Verificado",
      non_verificato: "No Verificado",
      forgetpassword: "¿Olvidaste tu contraseña?",
      err: {
        required: 'se requiere',
        email: 'Debe ser una email válida.',
        errore_generico: 'Por favor, rellene los campos correctamente',
        atleast: 'debe ser al menos largo',
        complexity: 'debe contener al menos 1 minúscula, 1 mayúscula y 1 dígito',
        notmore: 'no tiene que ser más largo que',
        char: 'caracteres',
        terms: 'Debes aceptar las condiciones, para continuar..',
        duplicate_email: 'La email ya ha sido registrada',
        duplicate_username: 'El nombre de usuario ya ha sido utilizado',
        sameaspassword: 'Las contraseñas deben ser idénticas',
      }
    },
    login: {
      page_title: 'Login',
      incorso: 'Login en curso',
      enter: 'Entra',
      errato: "Nombre de usuario, correo o contraseña incorrectos. inténtelo de nuevo",
      completato: 'Login realizado!',
    },
    reset: {
      title_reset_pwd: "Restablece tu contraseña",
      send_reset_pwd: 'Enviar restablecer contraseña',
      incorso: 'Solicitar nueva Email...',
      email_sent: 'Email enviada',
      check_email: 'Revise su correo electrónico, recibirá un mensaje con un enlace para restablecer su contraseña. Este enlace, por razones de seguridad, expirará después de 4 horas.',
      title_update_pwd: 'Actualiza tu contraseña',
      update_password: 'Actualizar contraseña',
    },
    logout: {
      uscito: 'Estás desconectado',
    },
    errors: {
      graphql: {
        undefined: 'no definido'
      }
    },
    todo: {
      titleprioritymenu: 'Prioridad:',
      inserttop: 'Ingrese una nueva Tarea arriba',
      insertbottom: 'Ingrese una nueva Tarea abajo',
      edit: 'Descripción Tarea:',
      completed: 'Ultimos Completados',
      usernotdefined: 'Atención, debes iniciar sesión para agregar una Tarea',
      start_date: 'Fecha inicio',
      status: 'Estado',
      completed_at: 'Fecha de finalización',
      expiring_at: 'Fecha de Caducidad',
      phase: 'Fase',
    },
    notification: {
      status: 'Estado',
      ask: 'Activar notificaciones',
      waitingconfirm: 'Confirmar la solicitud de notificación.',
      confirmed: 'Notificaciones activadas!',
      denied: 'Notificaciones deshabilitadas! Ten cuidado, así no verás llegar los mensajes. Rehabilítalos para verlos.',
      titlegranted: 'Notificaciones permitidas habilitadas!',
      statusnot: 'Estado Notificaciones',
      titledenied: 'Notificaciones permitidas deshabilitadas!',
      title_subscribed: 'Suscripción a FreePlanet.app!',
      subscribed: 'Ahora puedes recibir mensajes y notificaciones.',
      newVersionAvailable: 'Actualiza',
    },
    connection: 'Connection',
    proj: {
      newproj: 'Título Projecto',
      newsubproj: 'Título Sub-Projecto',
      insertbottom: 'Añadir nuevo Proyecto',
      longdescr: 'Descripción',
      hoursplanned: 'Horas Estimadas',
      hoursleft: 'Horas Restantes',
      hoursadded: 'Horas Adicional',
      hoursworked: 'Horas Trabajadas',
      begin_development: 'Comienzo desarrollo',
      begin_test: 'Comienzo Prueba',
      progresstask: 'Progresion',
      actualphase: 'Fase Actual',
      hoursweeky_plannedtowork: 'Horarios semanales programados',
      endwork_estimate: 'Fecha estimada de finalización',
      privacyread: 'Quien puede verlo:',
      privacywrite: 'Quien puede modificarlo:',
      totalphases: 'Fases totales',
      themecolor: 'Tema Colores',
      themebgcolor: 'Tema Colores Fondo'
    },
    cal: {
      booked: 'Reservado',
      booked_error: 'Reserva fallida. Intenta nuevamente más tarde',
      booking: 'Reserva Evento',
      titlebooking: 'Reserva',
      modifybooking: 'Edita Reserva',
      cancelbooking: 'Cancelar Reserva',
      canceledbooking: 'Reserva Cancelada',
      cancelederrorbooking: 'Cancelación no realizada, intente nuevamente más tarde',
      event: 'Evento',
      starttime: 'Inicio',
      endtime: 'fin',
      duration: 'Duración',
      hours: 'Tiempo',
      when: 'Cuando',
      where: 'Donde',
      teacher: 'Con',
      enterdate: 'Ingresar la fecha',
      details: 'Detalles',
      infoextra: 'Fecha y Hora Extras:',
      alldayevent: 'Todo el dia',
      eventstartdatetime: 'Evento de inicio de fecha y hora',
      enterEndDateTime: 'Fecha y hora del evento final',
      selnumpeople: 'Partecipantes',
      selnumpeople_short: 'Num',
      msgbooking: 'Mensaje para enviar',
      showinfo: 'Ver Info',
      bookingtextdefault: 'Reservo el evento',
      bookingtextdefault_of: 'de',
      data: 'Fecha',
      teachertitle: 'Maestro',
    },
    newsletter: {
      title: '¿Desea recibir nuestro boletín informativo?',
      name: 'Tu Nombre',
      surname: 'Tu Apellido',
      namehint: 'Nombre',
      surnamehint: 'Apellido',
      email: 'tu correo',
      submit: 'Subscribete',
      reset: 'Reiniciar',
      typesomething: 'Llenar el campo',
      acceptlicense: 'Acepto la licencia y los términos',
      license: 'Necesitas aceptar la licencia y los términos primero',
      submitted: 'Subscrito'
    },
    privacy_policy:'Política de privacidad',
    cookies: 'Utilizamos cookies para un mejor rendimiento web.'
  },
  fr: {
    grid: {
      editvalues: 'Changer les valeurs',
      showprevedit: 'Afficher les événements passés'
    },
    otherpages: {
      admin : {
        menu: 'Administration',
        eventlist: 'Réservation',
        usereventlist: 'Réservation Utilisateur',
        userlist: 'Liste d\'utilisateurs',
      },
      manage: {
        menu: 'Gérer'
      }
    },
    sendmsg: {
      write: 'écrit'
    },
    dialog: {
      ok: 'Bien',
      yes: 'Oui',
      no: 'Non',
      delete: 'Supprimer',
      update: 'mises à jour',
      cancel: 'annuler',
      today: 'Aujourd\'hui',
      book: 'Réserve',
      sendmsg: 'Envoyer Msg',
      msg: {
        titledeleteTask: 'Supprimer la tâche',
        deleteTask: 'Voulez-vous supprimer {mytodo}?'
      }
    },
    comp: {
      Conta: "Conta",
    },
    db: {
      recupdated: 'Enregistrement mis à jour',
      recfailed: 'Erreur lors de la mise à jour',
      deleterecord: 'Supprimer l\'enregistrement',
      deletetherecord: 'Supprimer l\'enregistrement?',
      deletedrecord: 'Enregistrement annulé',
      recdelfailed: 'Erreur lors de la suppression de l\'enregistrement',
    },
    components: {
      authentication: {
        login: {
          facebook: 'Facebook'
        },
        email_verification: {
          title: 'Créer un compte',
          introduce_email: 'entrez votre adresse email',
          email: 'Email',
          invalid_email: 'Votre email n\'est pas valide',
          verify_email: 'Vérifiez votre email',
          go_login: 'Retour à la connexion',
          incorrect_input: 'Entrée correcte.',
          link_sent: 'Pour confirmer l’enregistrement, lisez votre boîte aux lettres et cliquez sur "Vérifier le courrier électronique".".\n' + 'Si vous ne le trouvez pas, regardez dans le dossier Spam.'
        }
      }
    },
    fetch: {
      errore_generico: 'Erreur générique',
      errore_server: 'Le serveur n\'est pas accessible. Essayez encore, Merci',
      error_doppiologin: 'Re-connexion Accès ouvert par un autre appareil.',
    },
    user: {
      notregistered: 'Vous devez vous inscrire auprès du service avant de pouvoir stocker les données.',
      loggati: 'L\'utilisateur n\'est pas connecté'
    },
    reg: {
      incorso: 'Inscription en cours...',
      richiesto: 'Champ obligatoire',
      email: 'Email',
      date_reg: 'Date Inscript.',
      perm: 'Autorisations',
      username: 'Nom d\'utilisateur',
      name: 'Nom',
      surname: 'Prénom',
      username_login: 'Nom d\'utilisateur ou email',
      password: 'mot de passe',
      repeatPassword: 'Répéter le mot de passe',
      terms: "J'accepte les termes et conditions",
      submit: "S'inscrire",
      title_verif_reg: "Vérifier l'inscription",
      verificato: "Vérifié",
      non_verificato: "Non vérifié",
      forgetpassword: "Vous avez oublié votre mot de passe?",
      err: {
        required: 'c\'est nécessaire',
        email: 'Ce doit être un email valide.',
        errore_generico: 'S\'il vous plaît remplir les champs correctement',
        atleast: 'ça doit être au moins long',
        complexity: 'doit contenir au moins 1 minuscule, 1 majuscule et 1 chiffre',
        notmore: 'il ne doit pas être plus long que',
        char: 'caractères',
        terms: 'Vous devez accepter les conditions, pour continuer..',
        duplicate_email: 'L\'email a déjà été enregistré',
        duplicate_username: 'Le nom d\'utilisateur a déjà été utilisé',
        sameaspassword: 'Les mots de passe doivent être identiques',
      }
    },
    login: {
      page_title: 'Login',
      incorso: 'Connexion en cours',
      enter: 'Entrez',
      errato: "Nom d'utilisateur, email ou mot de passe incorrect. réessayer",
      completato: 'Connexion faite!',
    },
    reset: {
      title_reset_pwd: "Réinitialiser votre mot de passe",
      send_reset_pwd: 'Envoyer un mot de passe de réinitialisation',
      incorso: 'Demander un nouvel email...',
      email_sent: 'Email envoyé',
      check_email: 'Vérifiez votre email, vous recevrez un message avec un lien pour réinitialiser votre mot de passe. Ce lien, pour des raisons de sécurité, expirera au bout de 4 heures.',
      title_update_pwd: 'Mettez à jour votre mot de passe',
      update_password: 'Mettre à jour le mot de passe',
    },
    logout: {
      uscito: 'Vous êtes déconnecté',
    },
    errors: {
      graphql: {
        undefined: 'non défini'
      }
    },
    todo: {
      titleprioritymenu: 'Prioridad:',
      inserttop: 'Ingrese una nueva Tarea arriba',
      insertbottom: 'Ingrese una nueva Tarea abajo',
      edit: 'Descripción Tarea:',
      completed: 'Ultimos Completados',
      usernotdefined: 'Atención, debes iniciar sesión para agregar una Tarea',
      start_date: 'Fecha inicio',
      status: 'Estado',
      completed_at: 'Fecha de finalización',
      expiring_at: 'Fecha de Caducidad',
      phase: 'Fase',
    },
    notification: {
      status: 'Etat',
      ask: 'Activer les notifications',
      waitingconfirm: 'Confirmer la demande de notification.',
      confirmed: 'Notifications activées!',
      denied: 'Notifications désactivées! Attention, vous ne verrez pas les messages arriver. Réhabilitez-les pour les voir.',
      titlegranted: 'Notifications activées activées!',
      statusnot: 'Notifications d\'état',
      titledenied: 'Notifications autorisées désactivées!',
      title_subscribed: 'Abonnement au Site Web!',
      subscribed: 'Maintenant, vous pouvez recevoir des messages et des notifications.',
      newVersionAvailable: 'Mise à jour',
    },
    connection: 'Connexion',
    proj: {
      newproj: 'Título Projecto',
      newsubproj: 'Título Sub-Projecto',
      insertbottom: 'Añadir nuevo Proyecto',
      longdescr: 'Descripción',
      hoursplanned: 'Horas Estimadas',
      hoursleft: 'Horas Restantes',
      hoursadded: 'Horas Adicional',
      hoursworked: 'Horas Trabajadas',
      begin_development: 'Comienzo desarrollo',
      begin_test: 'Comienzo Prueba',
      progresstask: 'Progresion',
      actualphase: 'Fase Actual',
      hoursweeky_plannedtowork: 'Horarios semanales programados',
      endwork_estimate: 'Fecha estimada de finalización',
      privacyread: 'Quien puede verlo:',
      privacywrite: 'Quien puede modificarlo:',
      totalphases: 'Fases totales',
      themecolor: 'Tema Colores',
      themebgcolor: 'Tema Colores Fondo'
    },
    cal: {
      booked: 'Réservé',
      booked_error: 'La réservation a échoué. Réessayez plus tard',
      booking: 'Réserver l\'événement',
      titlebooking: 'Réservation',
      modifybooking: 'changement de réservation',
      cancelbooking: 'Annuler la réservation',
      canceledbooking: 'Réservation annulée',
      cancelederrorbooking: 'Annulation non effectuée, réessayez plus tard',
      event: 'événement',
      starttime: 'Accueil',
      endtime: 'fin',
      duration: 'Durée',
      hours: 'Le temps',
      when: 'Quand',
      where: 'Où',
      teacher: 'Avec',
      enterdate: 'Entrez la date',
      details: 'Les détails',
      infoextra: 'Extras Date et heure:',
      alldayevent: 'Toute la journée',
      eventstartdatetime: 'Date de début et heure de l\'événement',
      enterEndDateTime: 'Date et heure de l\'événement final',
      selnumpeople: 'Participants',
      selnumpeople_short: 'Num',
      msgbooking: 'Message à envoyer',
      showinfo: 'Voir Info',
      bookingtextdefault: 'Je réserve l\'événement',
      bookingtextdefault_of: 'du',
      data: 'Date',
      teachertitle: 'Professeur',
    },
    newsletter: {
      title: 'Souhaitez-vous recevoir notre newsletter?',
      name: 'Ton nom',
      surname: 'Tu prénom',
      namehint: 'Nom',
      surnamehint: 'Prénom',
      email: 'votre e-mail',
      submit: 'S\'abonner',
      reset: 'Redémarrer',
      typesomething: 'Remplir le champ',
      acceptlicense: 'J\'accepte la licence et les termes',
      license: 'Vous devez d\'abord accepter la licence et les termes',
      submitted: 'Abonné'
    },
    privacy_policy:'Politique de confidentialité',
    cookies: 'Nous utilisons des cookies pour améliorer les performances Web.'
  },
  enUs: {
    grid: {
      editvalues: 'Edit Values',
      showprevedit: 'Show Past Events'
    },
    otherpages: {
      admin : {
        menu: 'Administration',
        eventlist: 'Booking',
        usereventlist: 'Users Booking',
        userlist: 'Users List',
      },
      manage: {
        menu: 'Manage'
      }
    },
    sendmsg: {
      write: 'write'
    },
    dialog: {
      ok: 'Ok',
      yes: 'Yes',
      no: 'No',
      delete: 'Delete',
      update: 'Update',
      cancel: 'Cancel',
      today: 'Today',
      book: 'Book',
      sendmsg: 'Send Msg',
      msg: {
        titledeleteTask: 'Delete Task',
        deleteTask: 'Delete Task {mytodo}?'
      }
    },
    comp: {
      Conta: "Count",
    },
    db: {
      recupdated: 'Record Updated',
      recfailed: 'Error during update Record',
      deleterecord: 'Delete Record',
      deletetherecord: 'Delete the Record?',
      deletedrecord: 'Record Deleted',
      recdelfailed: 'Error during deletion of the Record',
    },
    components: {
      authentication: {
        login: {
          facebook: 'Facebook'
        },
        email_verification: {
          title: 'Begin your registration',
          introduce_email: 'Enter your email',
          email: 'Email',
          invalid_email: 'Your email is invalid',
          verify_email: 'Verify your email',
          go_login: 'Back to Login',
          incorrect_input: 'Incorrect input.',
          link_sent: 'To confirm the Registration, read your mailbox and click on "Verify email".\nIf you can not find it check your junk mail or spam.'
        }
      }
    },
    fetch: {
      errore_generico: 'Generic Error',
      errore_server: 'Unable to access to the Server. Retry. Thank you.',
      error_doppiologin: 'Signup again. Another access was made with another device.',
    },
    user: {
      notregistered: 'You need first to SignUp before storing data',
      loggati: 'User not logged in'
    },
    reg: {
      incorso: 'Registration please wait...',
      richiesto: 'Field Required',
      email: 'Email',
      date_reg: 'Reg. Date',
      perm: 'Permissions',
      username_login: 'Username or email',
      username: 'Username',
      name: 'Name',
      surname: 'Surname',
      password: 'Password',
      repeatPassword: 'Repeat password',
      terms: "I agree with the terms and conditions",
      submit: "Submit",
      title_verif_reg: "Verify Registration",
      verificato: "Verified",
      non_verificato: "Not Verified",
      forgetpassword: "Forget Password?",
      err: {
        required: 'is required',
        email: 'must be a valid email',
        errore_generico: 'Please review fields again',
        atleast: 'must be at least',
        complexity: 'must contains at least 1 lowercase letter, 1 uppercase letter, and 1 digit',
        notmore: 'must not be more than',
        char: 'characters long',
        terms: 'You need to agree with the terms & conditions.',
        duplicate_email: 'Email was already registered',
        duplicate_username: 'Username is already taken',
        sameaspassword: 'Passwords must be identical',
      }
    },
    login: {
      incorso: 'Login...',
      enter: 'Login',
      errato: "Username or password wrong. Please retry again",
      completato: 'Login successfully!',
    },
    reset: {
      title_reset_pwd: "Reset your Password",
      send_reset_pwd: 'Send password request',
      incorso: 'Request New Email...',
      email_sent: 'Email sent',
      check_email: 'Check your email for a message with a link to update your password. This link will expire in 4 hours for security reasons.',
      title_update_pwd: 'Update your password',
      update_password: 'Update Password',
    },
    logout: {
      uscito: 'Logout successfully',
    },
    errors: {
      graphql: {
        undefined: 'undefined'
      }
    },
    todo: {
      titleprioritymenu: 'Priority:',
      inserttop: 'Insert Task at the top',
      insertbottom: 'Insert Task at the bottom',
      edit: 'Task Description:',
      completed: 'Lasts Completed',
      usernotdefined: 'Attention, you need to be Signed In to add a new Task',
      start_date: 'Start Date',
      status: 'Status',
      completed_at: 'Completition Date',
      expiring_at: 'Expiring Date',
      phase: 'Phase',
    },
    notification: {
      status: 'Status',
      ask: 'Enable Notification',
      waitingconfirm: 'Confirm the Request Notification',
      confirmed: 'Notifications Enabled!',
      denied: 'Notifications Disabled! Attention, you will not see your messages incoming. Reenable it for see it',
      titlegranted: 'Notification Permission Granted!',
      statusnot: 'status Notification',
      titledenied: 'Notification Permission Denied!',
      title_subscribed: 'Subscribed to FreePlanet.app!',
      subscribed: 'You can now receive Notification and Messages.',
      newVersionAvailable: 'Upgrade',
    },
    connection: 'Conexión',
    proj: {
      newproj: 'Project Title',
      newsubproj: 'SubProject Title',
      insertbottom: 'Insert New Project',
      longdescr: 'Description',
      hoursplanned: 'Estimated Hours',
      hoursleft: 'Left Hours',
      hoursadded: 'Additional Hours',
      hoursworked: 'Worked Hours',
      begin_development: 'Start Dev',
      begin_test: 'Start Test',
      progresstask: 'Progression',
      actualphase: 'Actual Phase',
      hoursweeky_plannedtowork: 'Scheduled weekly hours',
      endwork_estimate: 'Estimated completion date',
      privacyread: 'Who can see it:',
      privacywrite: 'Who can modify if:',
      totalphases: 'Total Phase',
      themecolor: 'Theme Color',
      themebgcolor: 'Theme Color Background'
    },
    cal: {
      booked: 'Booked',
      booked_error: 'Reservation failed. Try again later',
      booking: 'Book the Event',
      titlebooking: 'Reservation',
      modifybooking: 'Modify Reservation',
      cancelbooking: 'Cancel Reservation',
      canceledbooking: 'Booking cancelled',
      cancelederrorbooking: 'Cancellation unsuccessfully, try again later',
      event: 'Event',
      starttime: 'From',
      endtime: 'to',
      duration: 'Duration',
      hours: 'Hours',
      when: 'When',
      where: 'Where',
      teacher: 'With',
      enterdate: 'Enter date',
      details: 'Details',
      infoextra: 'Extra Info DateTime',
      alldayevent: 'All-Day myevent',
      eventstartdatetime: 'Event start date and time',
      enterEndDateTime: 'Event end date and time',
      selnumpeople: 'Participants',
      selnumpeople_short: 'Num',
      msgbooking: 'Message to send',
      showinfo: 'Show Info',
      bookingtextdefault: 'I book the event',
      bookingtextdefault_of: 'of',
      data: 'Date',
      teachertitle: 'Teacher',
    },
    newsletter: {
      title: 'Would you like to receive our Newsletter?',
      name: 'Your name',
      surname: 'Your surname',
      namehint: 'Name',
      surnamehint: 'Surname',
      email: 'Your email',
      submit: 'Subscribe',
      reset: 'Reset',
      typesomething: 'Please type something',
      acceptlicense: 'I accept the license and terms',
      license: 'You need to accept the license and terms first',
      submitted: 'Subscribed'
    },
    privacy_policy:'Privacy Policy',
    cookies: 'We use cookies for better web performance.'
  },
  de: {
    grid: {
      editvalues: 'Edit Values',
      showprevedit: 'Show Past Events'
    },
    otherpages: {
      admin : {
        menu: 'Administration',
        eventlist: 'Booking',
        usereventlist: 'Users Booking',
        userlist: 'Users List',
      },
      manage: {
        menu: 'Manage'
      }
    },
    sendmsg: {
      write: 'write'
    },
    dialog: {
      ok: 'Ok',
      yes: 'Yes',
      no: 'No',
      delete: 'Delete',
      update: 'Update',
      cancel: 'Cancel',
      today: 'Today',
      book: 'Book',
      sendmsg: 'Send Msg',
      msg: {
        titledeleteTask: 'Delete Task',
        deleteTask: 'Delete Task {mytodo}?'
      }
    },
    comp: {
      Conta: "Count",
    },
    db: {
      recupdated: 'Record Updated',
      recfailed: 'Error during update Record',
      deleterecord: 'Delete Record',
      deletetherecord: 'Delete the Record?',
      deletedrecord: 'Record Deleted',
      recdelfailed: 'Error during deletion of the Record',
    },
    components: {
      authentication: {
        login: {
          facebook: 'Facebook'
        },
        email_verification: {
          title: 'Begin your registration',
          introduce_email: 'Enter your email',
          email: 'Email',
          invalid_email: 'Your email is invalid',
          verify_email: 'Verify your email',
          go_login: 'Back to Login',
          incorrect_input: 'Incorrect input.',
          link_sent: 'To confirm the Registration, read your mailbox and click on "Verify email".\nIf you can not find it check your junk mail or spam.'
        }
      }
    },
    fetch: {
      errore_generico: 'Generic Error',
      errore_server: 'Unable to access to the Server. Retry. Thank you.',
      error_doppiologin: 'Signup again. Another access was made with another device.',
    },
    user: {
      notregistered: 'You need first to SignUp before storing data',
      loggati: 'User not logged in'
    },
    reg: {
      page_title: 'Registration',
      incorso: 'Registration please wait...',
      richiesto: 'Field Required',
      email: 'Email',
      date_reg: 'Reg. Date',
      perm: 'Permissions',
      username_login: 'Username or email',
      username: 'Username',
      name: 'Name',
      surname: 'Surname',
      password: 'Password',
      repeatPassword: 'Repeat password',
      terms: "I agree with the terms and conditions",
      submit: "Submit",
      title_verif_reg: "Verify Registration",
      verificato: "Verified",
      non_verificato: "Not Verified",
      forgetpassword: "Forget Password?",
      err: {
        required: 'is required',
        email: 'must be a valid email',
        errore_generico: 'Please review fields again',
        atleast: 'must be at least',
        complexity: 'must contains at least 1 lowercase letter, 1 uppercase letter, and 1 digit',
        notmore: 'must not be more than',
        char: 'characters long',
        terms: 'You need to agree with the terms & conditions.',
        duplicate_email: 'Email was already registered',
        duplicate_username: 'Username is already taken',
        sameaspassword: 'Passwords must be identical',
      }
    },
    login: {
      page_title: 'Login',
      incorso: 'Login...',
      enter: 'Login',
      errato: "Username or password wrong. Please retry again",
      completato: 'Login successfully!',
    },
    reset: {
      title_reset_pwd: "Reset your Password",
      send_reset_pwd: 'Send password request',
      incorso: 'Request New Email...',
      email_sent: 'Email sent',
      check_email: 'Check your email for a message with a link to update your password. This link will expire in 4 hours for security reasons.',
      title_update_pwd: 'Update your password',
      update_password: 'Update Password',
    },
    logout: {
      uscito: 'Logout successfully',
    },
    errors: {
      graphql: {
        undefined: 'undefined'
      }
    },
    todo: {
      titleprioritymenu: 'Priority:',
      inserttop: 'Insert Task at the top',
      insertbottom: 'Insert Task at the bottom',
      edit: 'Task Description:',
      completed: 'Lasts Completed',
      usernotdefined: 'Attention, you need to be Signed In to add a new Task',
      start_date: 'Start Date',
      status: 'Status',
      completed_at: 'Completition Date',
      expiring_at: 'Expiring Date',
      phase: 'Phase',
    },
    notification: {
      status: 'Status',
      ask: 'Enable Notification',
      waitingconfirm: 'Confirm the Request Notification',
      confirmed: 'Notifications Enabled!',
      denied: 'Notifications Disabled! Attention, you will not see your messages incoming. Reenable it for see it',
      titlegranted: 'Notification Permission Granted!',
      statusnot: 'status Notification',
      titledenied: 'Notification Permission Denied!',
      title_subscribed: 'Subscribed to FreePlanet.app!',
      subscribed: 'You can now receive Notification and Messages.',
      newVersionAvailable: 'Upgrade',
    },
    connection: 'Conexión',
    proj: {
      newproj: 'Project Title',
      newsubproj: 'SubProject Title',
      insertbottom: 'Insert New Project',
      longdescr: 'Description',
      hoursplanned: 'Estimated Hours',
      hoursleft: 'Left Hours',
      hoursadded: 'Additional Hours',
      hoursworked: 'Worked Hours',
      begin_development: 'Start Dev',
      begin_test: 'Start Test',
      progresstask: 'Progression',
      actualphase: 'Actual Phase',
      hoursweeky_plannedtowork: 'Scheduled weekly hours',
      endwork_estimate: 'Estimated completion date',
      privacyread: 'Who can see it:',
      privacywrite: 'Who can modify if:',
      totalphases: 'Total Phase',
      themecolor: 'Theme Color',
      themebgcolor: 'Theme Color Background'
    },
    cal: {
      booked: 'Booked',
      booked_error: 'Reservation failed. Try again later',
      booking: 'Book the Event',
      titlebooking: 'Reservation',
      modifybooking: 'Modify Reservation',
      cancelbooking: 'Cancel Reservation',
      canceledbooking: 'Booking cancelled',
      cancelederrorbooking: 'Cancellation unsuccessfully, try again later',
      event: 'Event',
      starttime: 'From',
      endtime: 'to',
      duration: 'Duration',
      hours: 'Hours',
      when: 'When',
      where: 'Where',
      teacher: 'With',
      enterdate: 'Enter date',
      details: 'Details',
      infoextra: 'Extra Info DateTime',
      alldayevent: 'All-Day myevent',
      eventstartdatetime: 'Event start date and time',
      enterEndDateTime: 'Event end date and time',
      selnumpeople: 'Participants',
      selnumpeople_short: 'Num',
      msgbooking: 'Message to send',
      showinfo: 'Show Info',
      bookingtextdefault: 'I book the event',
      bookingtextdefault_of: 'of',
      data: 'Date',
      teachertitle: 'Teacher',
    },
    newsletter: {
      title: 'Would you like to receive our Newsletter?',
      name: 'Your name',
      surname: 'Your surname',
      namehint: 'Name',
      surnamehint: 'Surname',
      email: 'Your email',
      submit: 'Subscribe',
      reset: 'Reset',
      typesomething: 'Please type something',
      acceptlicense: 'I accept the license and terms',
      license: 'You need to accept the license and terms first',
      submitted: 'Subscribed'
    },
    privacy_policy:'Privacy Policy',
    cookies: 'Wir verwenden Cookies für eine bessere Webleistung.'
  },
};

const msgit = { ...msg_website.it, ...msgglobal.it }
const msgde = { ...msg_website.de, ...msgglobal.de }
const msgfr = { ...msg_website.fr, ...msgglobal.fr }
const msges = { ...msg_website.es, ...msgglobal.es }
const msgenUs = { ...msg_website.enUs, ...msgglobal.enUs }

const messages = {
  it: {
    ...msgit,
    pages: { ...msg_website.it.pages, ...msgglobal.it.pages },
    msg: { ...msg_website.it.msg, ...msgglobal.it.msg },
  },
  es: {
    ...msges,
    pages: { ...msg_website.es.pages, ...msgglobal.es.pages },
    msg: { ...msg_website.es.msg, ...msgglobal.es.msg },
  },
  enUs: {
    ...msgenUs,
    pages: { ...msg_website.enUs.pages, ...msgglobal.enUs.pages },
    msg: { ...msg_website.enUs.msg, ...msgglobal.enUs.msg },
  },
  fr: {
    ...msgfr,
    pages: { ...msg_website.fr.pages, ...msgglobal.fr.pages },
    msg: { ...msg_website.fr.msg, ...msgglobal.fr.msg },
  },
  de: {
    ...msgde,
    pages: { ...msg_website.de.pages, ...msgglobal.de.pages },
    msg: { ...msg_website.de.msg, ...msgglobal.de.msg },
  }
}

export default messages;
